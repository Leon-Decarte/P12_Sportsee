import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
} from '../services/dataService';

import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceRadarChart from '../components/PerformanceRadarChart';
import ScoreChart from '../components/ScoreChart';
import CardsColumn from '../components/CardsColumn';

import styles from './Profil.module.css';

function Profil() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [averageSessions, setAverageSessions] = useState(null);
    const [performance, setPerformance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                console.log(' Chargement des données pour user:', userId);

                // Vérification des IDs valides
                const validUserIds = ['12', '18'];
                if (!validUserIds.includes(userId)) {
                    console.log(' ID utilisateur non valide');
                    navigate('/404', { state: { message: `L'utilisateur ${userId} n'existe pas. Utilisez les IDs 12 ou 18.` } });
                    return;
                }

                const [userData, activityData, averageData, performanceData] = await Promise.all([
                    getUserData(userId),
                    getUserActivity(userId),
                    getUserAverageSessions(userId),
                    getUserPerformance(userId)
                ]);

                // Vérification si les données sont valides
                if (!userData || !userData.userInfos) {
                    console.log(' Données utilisateur invalides');
                    navigate('/404', { state: { message: `Données utilisateur ${userId} non disponibles.` } });
                    return;
                }

                console.log(' Données chargées avec succès');

                setUser(userData);
                setActivity(activityData);
                setAverageSessions(averageData);
                setPerformance(performanceData);

            } catch (err) {
                console.error('Erreur API:', err);

                // TOUTES LES ERREURS REDIRIGENT VERS LA PAGE 404
                let errorMessage = "Erreur de chargement des données.";

                if (err.message?.includes('404') || err.message?.includes('Not Found')) {
                    errorMessage = `L'utilisateur ${userId} n'existe pas ou l'API est inaccessible.`;
                } else if (err.message?.includes('Failed to fetch')) {
                    errorMessage = "Le serveur backend n'est pas accessible. Démarrez-le sur localhost:3000.";
                }

                navigate('/404', { state: { message: errorMessage } });
            } finally {
                setLoading(false);
            }
        };

        if (userId) {
            fetchData();
        }
    }, [userId, navigate]);

    if (loading) {
        return (
            <div className={styles.loading}>
                <p>Chargement des données utilisateur {userId}...</p>
            </div>
        );
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.header}>
                <Link to="/" className={styles.backButton}>← Retour à l'accueil</Link>
                <div className={styles.userInfo}>
                    <h1>Bonjour <span className={styles.userName}>{user.userInfos.firstName}</span></h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.chartsColumn}>
                    <div className={styles.activityWrapper}>
                        <ActivityChart data={activity} />
                    </div>
                    <div className={styles.subChartsRow}>
                        <AverageSessionsChart data={averageSessions} />
                        <PerformanceRadarChart data={performance} />
                        <ScoreChart score={user.todayScore || user.score} />
                    </div>
                </div>
                <CardsColumn keyData={user.keyData} />
            </div>
        </div>
    );
}

export default Profil;