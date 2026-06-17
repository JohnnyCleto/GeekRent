import axios from 'axios';

// =====================
// AUTH API
// =====================
export const authApi = axios.create({
  baseURL: 'https://auth-service-production-1caf.up.railway.app'
});

// =====================
// ITEM API
// =====================
export const itemApi = axios.create({
  baseURL: 'https://attractive-art-production-3668.up.railway.app'
});

// =====================
// RENTAL API
// =====================
export const rentalApi = axios.create({
  baseURL: 'https://mellow-wholeness-production-4fc6.up.railway.app'
});

// =====================
// INTERCEPTOR GLOBAL
// =====================
export function setupInterceptor() {
  const addToken = (api) => {
    api.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');

      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        };
      }

      return config;
    });

    api.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');

          if (window.location.pathname !== '/login') {
            window.location.href = '/login';
          }
        }

        return Promise.reject(error);
      }
    );
  };

  addToken(authApi);
  addToken(itemApi);
  addToken(rentalApi);
}