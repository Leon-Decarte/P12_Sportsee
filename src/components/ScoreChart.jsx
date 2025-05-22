import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

export default function ScoreChart({ score }) {
    const data = [
        { name: 'score', value: score },
        { name: 'rest', value: 1 - score }
    ];

    return (
        <div style={{ background: '#FBFBFB', borderRadius: '5px', padding: '20px' }}>
            <h3 style={{ fontSize: '16px' }}>Score</h3>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius={70}
                        outerRadius={80}
                        cornerRadius={10}
                    >
                        <Cell fill="#FF0000" />
                        <Cell fill="#FBFBFB" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div style={{
                position: 'relative',
                top: '-140px',
                textAlign: 'center',
                fontSize: '18px'
            }}>
                <p><strong>{score * 100}%</strong> de votre objectif</p>
            </div>
        </div>
    );
}

ScoreChart.propTypes = {
    score: PropTypes.number.isRequired,
};
