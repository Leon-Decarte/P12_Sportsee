import PropTypes from 'prop-types';

export default function KeyDataCard({ iconPath, value, unit, label, bgColor }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FBFBFB',
            borderRadius: '5px',
            padding: '15px',
            marginBottom: '20px'
        }}>
            <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '6px',
                backgroundColor: bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px'
            }}>
                <img src={iconPath} alt={label} width="20" />
            </div>
            <div>
                <p style={{ fontWeight: 'bold' }}>{value}{unit}</p>
                <p style={{ color: '#74798C', fontSize: '14px' }}>{label}</p>
            </div>
        </div>
    );
}

KeyDataCard.propTypes = {
    icon: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    unit: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired
};
