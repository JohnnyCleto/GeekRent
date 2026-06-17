import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://auth-service-production-1caf.up.railway.app'
});

export const itemApi = axios.create({
  baseURL: 'https://attractive-art-production-3668.up.railway.app'
});

export const rentalApi = axios.create({
  baseURL: 'https://mellow-wholeness-production-4fc6.up.railway.app'
});

export function setupInterceptor() {

  const addToken = (api) => {

    api.interceptors.request.use(
      (config) => {

        const token = localStorage.getItem('token');

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      }
    );
  };

  addToken(authApi);
  addToken(itemApi);
  addToken(rentalApi);
}