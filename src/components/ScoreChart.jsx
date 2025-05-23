import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import styles from './ScoreChart.module.css';

export default function ScoreChart({ score }) {
    const data = [
        { name: 'score', value: score },
        { name: 'rest', value: 1 - score }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>Score</div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        innerRadius="65%"
                        outerRadius="75%"
                        cornerRadius={10}
                    >
                        <Cell fill="#FF0000" />
                        <Cell fill="#FBFBFB" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className={styles.centerText}>
                <p><strong>{score * 100}%</strong> de votre objectif</p>
            </div>
        </div>
    );
}

ScoreChart.propTypes = {
    score: PropTypes.number.isRequired,
};
