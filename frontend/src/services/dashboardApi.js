// dashboardApi.js
import { authApi } from './api';

export const getDashboard = () => {
  return authApi.get('/auth/dashboard');
};