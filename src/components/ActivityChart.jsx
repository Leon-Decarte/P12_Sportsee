import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
    CartesianGrid
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './ActivityChart.module.css';


function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}kCal</p>
            </div>
        );
    }
    return null;
}


export default function ActivityChart({ data }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" orientation="left" dataKey="kilogram" />
                    <YAxis yAxisId="right" orientation="right" dataKey="calories" hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" align="right" />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" radius={[5, 5, 0, 0]} />
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

ActivityChart.propTypes = {
    data: PropTypes.array.isRequired,
};
