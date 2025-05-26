import './TopNav.css';
import Logo from '../assets/logo.svg'

export default function TopNav() {
    return (
        <header className="top-nav">
            <nav className="nav-links">
                <ul>
                    <li className="logo">
                        <img src={Logo} alt="SportSee Logo" />
                    </li>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/profile">Profil</a></li>
                    <li><a href="/settings">Réglage</a></li>
                    <li><a href="/settings">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
}
