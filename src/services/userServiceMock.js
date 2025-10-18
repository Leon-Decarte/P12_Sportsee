
import { userData } from '../mock/userData.js';
import { activityData } from '../mock/activityData.js';
import { averageSessionsData } from '../mock/averageSessionsData.js';
import { performanceData } from '../mock/performanceData.js';

export async function getUserData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = userData.data;
            resolve({
                id: data.id,
                userInfos: data.userInfos,
                todayScore: data.todayScore || data.score,
                keyData: data.keyData
            });
        }, 100); // Temps réduit pour le développement
    });
}

export async function getUserActivity(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sessions = activityData.data.sessions;
            resolve(sessions.map((session, index) => ({
                ...session,
                day: (index + 1).toString() // Convertir en string pour cohérence
            })));
        }, 100);
    });
}

export async function getUserAverageSessions(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(averageSessionsData.data.sessions);
        }, 100);
    });
}

export async function getUserPerformance(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = performanceData.data;
            const kindMap = data.kind;
            resolve(data.data.map((item) => ({
                ...item,
                kind: kindMap[item.kind]
            })));
        }, 100);
    });
}