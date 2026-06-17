import axios from 'axios';

export const authApi = axios.create({

baseURL: import.meta.env.VITE_AUTH_URL

});

export const itemApi = axios.create({

baseURL: import.meta.env.VITE_ITEM_URL

});

export const rentalApi = axios.create({

baseURL: import.meta.env.VITE_RENTAL_URL

});

setupInterceptor(authApi);

setupInterceptor(itemApi);

setupInterceptor(rentalApi);
