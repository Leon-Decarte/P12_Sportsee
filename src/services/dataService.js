import {
    getUserData as getUserDataAPI,
    getUserActivity as getUserActivityAPI,
    getUserAverageSessions as getUserAverageSessionsAPI,
    getUserPerformance as getUserPerformanceAPI
} from './apiService';

import {
    getUserData as getUserDataMock,
    getUserActivity as getUserActivityMock,
    getUserAverageSessions as getUserAverageSessionsMock,
    getUserPerformance as getUserPerformanceMock
} from './userServiceMock.js';



import { config } from './config.js';


/////////////////////////////////////
const USE_MOCK = config.useMock; ///
///////////////////////////////////

export const getUserData = USE_MOCK ? getUserDataMock : getUserDataAPI;
export const getUserActivity = USE_MOCK ? getUserActivityMock : getUserActivityAPI;
export const getUserAverageSessions = USE_MOCK ? getUserAverageSessionsMock : getUserAverageSessionsAPI;
export const getUserPerformance = USE_MOCK ? getUserPerformanceMock : getUserPerformanceAPI;

console.log(`Mode: ${USE_MOCK ? 'MOCKS' : 'API'}`);
console.log(`Mode: ${USE_MOCK }`);
