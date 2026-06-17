// src/services/api.js
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

/**
 * 🔥 Interceptor global para todas as APIs
 */
export function setupInterceptor() {

  const addToken = (api) => {

    api.interceptors.request.use((config) => {

      const token = localStorage.getItem('token');

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;

    }, (error) => {
      return Promise.reject(error);
    });

  };

  addToken(authApi);
  addToken(itemApi);
  addToken(rentalApi);
}