import './Sidebar.css';
import Mediation from '../assets/meditation-icon.svg';
import Muscu from '../assets/muscu-icon.svg';
import Natation from '../assets/natation-icon.svg';
import Velo from '../assets/velo-icon.svg';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li><img src={Mediation} alt="Mediation" /></li>
                    <li><img src={Muscu} alt="Musculation" /></li>
                    <li><img src={Natation} alt="Natation" /></li>
                    <li><img src={Velo} alt="Vélo" /></li>
                </ul>
                <p className='copyright'>Copyright 2020 SportSee</p>
            </nav>
        </aside>
    );
}
