
import { Link } from 'react-router-dom';
import styles from './UserSelection.module.css';

export default function UserSelection() {
    const users = [
        { id: 12, name: "Karl Dovineau" },
        { id: 18, name: "Cecilia Ratorez" }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>SportSee Dashboard</h1>
            <p className={styles.subtitle}>Sélectionnez un utilisateur</p>

            <div className={styles.usersGrid}>
                {users.map(user => (
                    <Link
                        key={user.id}
                        to={`/user/${user.id}`}
                        className={styles.userCard}
                    >
                        <div className={styles.userAvatar}>
                            {user.name.charAt(0)}
                        </div>
                        <h3 className={styles.userName}>{user.name}</h3>
                        <p className={styles.userId}>ID: {user.id}</p>
                    </Link>
                ))}
            </div>

        </div>
    );
}