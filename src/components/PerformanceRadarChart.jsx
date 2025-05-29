import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './PerformanceRadarChart.module.css';

export default function PerformanceRadarChart({ data }) {
    return (
        <div className={styles.container}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    data={data}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="#fff"
                        tickLine={false}
                        axisLine={false}
                        fontSize={12}
                    />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>

        </div>
    );
}

PerformanceRadarChart.propTypes = {
    data: PropTypes.array.isRequired,
};
