import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import styles from './AverageSessionsChart.module.css';

const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length && payload[0].payload) {
        return (
            <div className={styles.tooltip}>
                {payload[0].payload.sessionLength} min
            </div>
        );
    }
    return null;
}

export default function AverageSessionsChart({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Durée moyenne des sessions</div>
            <div className={styles.chartContent}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                        <XAxis
                            dataKey="day"
                            tickFormatter={(day) => dayLabels[day - 1]}
                            axisLine={false}
                            tickLine={false}
                            stroke="#fff"
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Line
                            type="monotone"
                            dataKey="sessionLength"
                            stroke="#fff"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

AverageSessionsChart.propTypes = {
    data: PropTypes.array.isRequired,
};
