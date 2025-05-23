import { useEffect, useState } from 'react';
import { getUserDataMock } from '../services/userServiceMock';
import { getUserActivityMock } from '../services/activityServiceMock';
import { getAverageSessionsMock } from '../services/averageSessionsServiceMock';
import { getUserPerformanceMock } from '../services/performanceServiceMock';


import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceRadarChart from '../components/PerformanceRadarChart';
import ScoreChart from '../components/ScoreChart';



import CardsColumn from '../components/CardsColumn';
import styles from './Profil.module.css';






function Profil() {
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);
    const [averageSessions, setAverageSessions] = useState(null);
    const [performance, setPerformance] = useState(null);


    useEffect(() => {
        getUserDataMock(12).then(setUser);

        getUserActivityMock(12).then((data) => {
            const sessions = data.sessions.map((session, index) => ({
                ...session,
                day: index + 1,
            }));
            setActivity(sessions);
        });

        getAverageSessionsMock(12).then((data) => {
            setAverageSessions(data.sessions);
        });
        getUserPerformanceMock(12).then((data) => {
            const kindLabels = data.kind;

            // On transforme les IDs (1,2,...) en labels ("Cardio", etc.)
            const formattedData = data.data.map((item) => ({
                value: item.value,
                kind: kindLabels[item.kind]
            }));

            setPerformance(formattedData);
        });

    }, []);

    if (!user || !activity || !averageSessions || !performance) return <p>Chargement...</p>;

    return (

        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Bonjour <span className={styles.userName}>{user.userInfos.firstName}</span></h1>
                <p className={styles.subtitle}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className={styles.main}>
                <div className={styles.chartsColumn}>
                    <ActivityChart data={activity} />
                    <div className={styles.subChartsRow}>
                        <div><AverageSessionsChart data={averageSessions} /></div>
                        <div><PerformanceRadarChart data={performance} /></div>
                        <div><ScoreChart score={user.todayScore || user.score} /></div>
                    </div>

                </div>

                <CardsColumn keyData={user.keyData} />
            </div>
        </div>

    );
}

export default Profil;
