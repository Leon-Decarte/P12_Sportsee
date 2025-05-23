import PropTypes from 'prop-types';
import styles from './KeyDataCard.module.css';

export default function KeyDataCard({ iconPath, value, unit, label, bgColor }) {
    return (
        <div className={styles.card}>
            <div className={styles.iconContainer} style={{ backgroundColor: bgColor }}>
                <img src={iconPath} alt={label} width="20" />
            </div>
            <div>
                <p className={styles.value}>{value}{unit}</p>
                <p className={styles.label}>{label}</p>
            </div>
        </div>
    );
}

KeyDataCard.propTypes = {
    iconPath: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    unit: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
};
