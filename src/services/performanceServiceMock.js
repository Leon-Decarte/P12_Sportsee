import { performanceMock } from '../mock/performanceData';

export const getUserPerformanceMock = async (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(performanceMock), 300);
    });
};
