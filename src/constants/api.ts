export const API_URL = import.meta.env.VITE_APP_BASE_API_URL;

export const URL = import.meta.env.PROD
  ? import.meta.env.VITE_APP_PROD_URL
  : import.meta.env.VITE_APP_DEV_URL;

export const KAKAO_URL = 'https://kauth.kakao.com/oauth';
