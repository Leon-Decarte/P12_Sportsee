import { useEffect, useState } from 'react';
import { getUserDataMock } from '../services/userServiceMock';
import { getUserActivityMock } from '../services/activityServiceMock';
import ActivityChart from '../components/ActivityChart';

function Profil() {
    const [user, setUser] = useState(null);
    const [activity, setActivity] = useState(null);

    useEffect(() => {
        getUserDataMock(12).then(setUser);
        getUserActivityMock(12).then(data => {
            // On transforme "day" en numéro de jour (1, 2, 3...)
            const sessions = data.sessions.map((session, index) => ({
                ...session,
                day: index + 1
            }));
            setActivity(sessions);
        });
    }, []);

    if (!user || !activity) return <p>Chargement...</p>;

    return (
        <div>
            <h1>Bonjour <span style={{ color: 'red' }}>{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

            <ActivityChart data={activity} />
        </div>
    );
}

export default Profil;
