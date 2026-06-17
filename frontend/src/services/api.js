// src/services/api.js
import axios from 'axios';

export const authApi = axios.create({
  baseURL: 'https://auth-service-production-1caf.up.railway.app'
});

export function setupInterceptor() {
  authApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
}