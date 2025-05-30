import { useEffect, useState } from 'react';
import {
    getUserData,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance
} from '../services/apiService';



import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceRadarChart from '../components/PerformanceRadarChart';
import ScoreChart from '../components/ScoreChart';



import CardsColumn from '../components/CardsColumn';
import styles from './Profil.module.css';
import Layout from '../components/Layout';






function Profil() {
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [averageSessions, setAverageSessions] = useState(null);
    const [performance, setPerformance] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            const user = await getUserData(18);
            const activity = await getUserActivity(18);
            const average = await getUserAverageSessions(18);
            const performance = await getUserPerformance(18);

            setUser(user);
            setActivity(activity);
            setAverageSessions(average);
            setPerformance(performance);
        };

        fetchData();
    }, []);


    if (!user || !activity || !averageSessions || !performance) return <p>Chargement...</p>;

    return (

        <Layout>
            <div className={styles.pageWrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Bonjour <span className={styles.userName}>{user.userInfos.firstName}</span></h1>
                    <p className={styles.subtitle}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className={styles.main}>
                    <div className={styles.chartsColumn}>
                        <div className={styles.activityWrapper}>
                            <ActivityChart data={activity} />
                        </div>
                        <div className={styles.subChartsRow}>
                            <div><AverageSessionsChart data={averageSessions} /></div>
                            <div><PerformanceRadarChart data={performance} /></div>
                            <div><ScoreChart score={user.todayScore || user.score} /></div>
                        </div>

                    </div>

                    <CardsColumn keyData={user.keyData} />
                </div>
            </div>
        </Layout>
    );
}

export default Profil;
