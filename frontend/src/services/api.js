import axios from 'axios';

console.log("AUTH URL =", import.meta.env.VITE_AUTH_URL);

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL
});

export const itemApi = axios.create({
  baseURL: import.meta.env.VITE_ITEM_URL
});

export const rentalApi = axios.create({
  baseURL: import.meta.env.VITE_RENTAL_URL
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

      },
      (error) => Promise.reject(error)
    );
  };

  addToken(authApi);
  addToken(itemApi);
  addToken(rentalApi);
}