import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length && payload[0].payload) {
        return (
            <div style={{
                background: 'white',
                color: 'black',
                padding: '5px 10px',
                fontSize: '12px',
                borderRadius: '5px'
            }}>
                <p>{payload[0].payload.sessionLength} min</p>
            </div>
        );
    }

    return null;
}


export default function AverageSessionsChart({ data }) {
    return (
        <div style={{ background: '#FF0000', borderRadius: '5px', padding: '20px', color: '#fff' }}>
            <h3 style={{ opacity: 0.5 }}>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <XAxis
                        dataKey="day"
                        tickFormatter={(day) => dayLabels[day - 1]}
                        axisLine={false}
                        tickLine={false}
                        stroke="#fff"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

AverageSessionsChart.propTypes = {
    data: PropTypes.array.isRequired,
};
