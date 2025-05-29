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
            <div className={styles.headerRow}>
                <h2 className={styles.title}>Activité quotidienne</h2>
                <div className={styles.legend}>
                    <div>
                        <span className={styles.dot} style={{ backgroundColor: '#282D30' }}></span>
                        Poids (kg)
                    </div>
                    <div>
                        <span className={styles.dot} style={{ backgroundColor: '#E60000' }}></span>
                        Calories brûlées (kCal)
                    </div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={data}
                    barCategoryGap={30}
                    barGap={8}
                    margin={{ top: 30, right: 30, left: 30, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={{ stroke: '#DEDEDE' }}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                    />
                    <YAxis yAxisId="right" orientation="left" hide />
                    <Tooltip content={<CustomTooltip />} />
                    
                    <Bar dataKey="kilogram" yAxisId="left" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="right" fill="#E60000" barSize={7} radius={[3, 3, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

ActivityChart.propTypes = {
    data: PropTypes.array.isRequired,
};
