const BASE_URL = 'http://localhost:3000/user';

/**
 * Fetch main user data
 */
export async function getUserData(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    const json = await res.json();
    const data = json.data;

    return {
        id: data.id,
        userInfos: data.userInfos,
        todayScore: data.todayScore || data.score, // API uses either
        keyData: data.keyData
    };
}

/**
 * Fetch activity
 */
export async function getUserActivity(id) {
    const res = await fetch(`${BASE_URL}/${id}/activity`);
    const json = await res.json();
    return json.data.sessions.map((session, index) => ({
        ...session,
        day: index + 1
    }));
}

/**
 * Fetch average sessions
 */
export async function getUserAverageSessions(id) {
    const res = await fetch(`${BASE_URL}/${id}/average-sessions`);
    const json = await res.json();
    return json.data.sessions;
}

/**
 * Fetch performance
 */
export async function getUserPerformance(id) {
    const res = await fetch(`${BASE_URL}/${id}/performance`);
    const json = await res.json();
    const kindMap = json.data.kind;
    return json.data.data.map((item) => ({
        ...item,
        kind: kindMap[item.kind]
    }));
}
