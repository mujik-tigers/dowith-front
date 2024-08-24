import { API_URL } from '@/constants/api';
import { useUserAppStore } from '@/store/auth/use-user-store';
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const privateApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

publicApi.interceptors.request.use((error) => {
  console.log('publicApi error', error);

  return Promise.reject(error);
});

privateApi.interceptors.request.use(
  (config) => {
    const { userData } = useUserAppStore.getState();
    const accessToken = userData.accessToken;

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      // window.location.href = '/login';
      console.log(config);

      return Promise.reject(
        new Error('No access token, redirecting to login.')
      );
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { userData, setUserData, clearUserData } = useUserAppStore.getState();

    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await publicApi.post('/refresh', {
          refreshToken: userData.refreshToken,
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          refreshResponse.data;

        setUserData({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });

        privateApi.defaults.headers['Authorization'] =
          `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return privateApi(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        clearUserData();
        // window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    clearUserData();
    // window.location.href = '/login';
    return Promise.reject(error);
  }
);
