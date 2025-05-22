import KeyDataCard from './KeyDataCard';
import calorieIcon from '../assets/calorie-icon.svg';
import proteinIcon from '../assets/protein-icon.svg';
import carbIcon from '../assets/carb-icon.svg';
import fatIcon from '../assets/fat-icon.svg';

export default function CardsColumn({ keyData }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <KeyDataCard
                iconPath={calorieIcon}
                value={keyData.calorieCount}
                unit="kCal"
                label="Calories"
                bgColor="rgba(255, 0, 0, 0.1)"
            />
            <KeyDataCard
                iconPath={proteinIcon}
                value={keyData.proteinCount}
                unit="g"
                label="Protéines"
                bgColor="rgba(74, 184, 255, 0.1)"
            />
            <KeyDataCard
                iconPath={carbIcon}
                value={keyData.carbohydrateCount}
                unit="g"
                label="Glucides"
                bgColor="rgba(249, 206, 35, 0.1)"
            />
            <KeyDataCard
                iconPath={fatIcon}
                value={keyData.lipidCount}
                unit="g"
                label="Lipides"
                bgColor="rgba(253, 81, 129, 0.1)"
            />
        </div>
    );
}
