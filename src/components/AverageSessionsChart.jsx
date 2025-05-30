import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './AverageSessionsChart.module.css';

const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return <div className={styles.tooltip}>{payload[0].value} min</div>;
    }
    return null;
}

export default function AverageSessionsChart({ data }) {
    const [cursorX, setCursorX] = useState(null);

    const handleMouseMove = (e) => {
        if (e && e.activeCoordinate) {
            setCursorX(e.activeCoordinate.x);
        }
    };

    const handleMouseLeave = () => {
        setCursorX(null);
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Durée moyenne des sessions</h3>
            <div className={styles.chartWrapper}>
                {cursorX !== null && (
                    <div
                        className={styles.curtain}
                        style={{
                            left: `${cursorX}px`,
                            width: `calc(100% - ${cursorX}px)`
                        }}
                    />
                )}
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 80, right: 20, bottom: 0, left: 20 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="white" stopOpacity={0.4} />
                                <stop offset="100%" stopColor="white" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="day"
                            tickFormatter={(day) => dayLabels[day - 1]}
                            axisLine={false}
                            tickLine={false}
                            stroke="white"
                            tick={{ fontSize: 12, opacity: 0.5 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="url(#lineGradient)"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 4, stroke: 'white', strokeWidth: 2, fill: 'white' }}
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
