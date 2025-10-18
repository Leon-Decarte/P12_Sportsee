import { Link, useLocation } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
    const location = useLocation();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Page non trouvée</h2>
                <p className={styles.message}>
                    La page <strong>{location.pathname}</strong> que vous recherchez n'existe pas.
                </p>
                <div className={styles.suggestions}>
                    <p>Voici ce que vous pouvez faire :</p>
                    <ul>
                        <li>Vérifier l'URL pour les fautes de frappe</li>
                        <li>Retourner à la page d'accueil</li>
                        <li>Utiliser les utilisateurs de test : <strong>12</strong> ou <strong>18</strong></li>
                    </ul>
                </div>
                <div className={styles.actions}>
                    <Link to="/" className={styles.homeButton}>
                        ← Retour à l'accueil
                    </Link>
                    <Link to="/user/12" className={styles.userButton}>
                        Voir User 12
                    </Link>
                    <Link to="/user/18" className={styles.userButton}>
                        Voir User 18
                    </Link>
                </div>
            </div>
        </div>
    );
}