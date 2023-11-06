const devMode = false;

export const appConfig = {
  baseUrl: devMode
    ? import.meta.env.VITE_LOCALHOST_URL
    : import.meta.env.VITE_BACKEND_URL,
};
