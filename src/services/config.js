export const config = {
    useMock: import.meta.env.VITE_USE_MOCK === 'true',
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
};

console.log('Configuration chargée:', config);