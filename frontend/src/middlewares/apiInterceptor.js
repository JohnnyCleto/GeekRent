// src/middlewares/apiInterceptor.js
export function setupInterceptor(api) {

  api.interceptors.request.use(
    (config) => {

      const token = localStorage.getItem("token");

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },

    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,

    (error) => {

      const status = error.response?.status;

      if (status === 401) {
        localStorage.removeItem("token");

        // evita loop infinito de redirect em build
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }

      return Promise.reject(error);
    }
  );
}