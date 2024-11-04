import { API_URL } from '@/constants/api';
import { useUserAppStore } from '@/store/auth/use-user-store';
import axios from 'axios';
import { openModal } from '@/store/use-modal-store';

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

privateApi.interceptors.request.use((config) => {
  const { userData } = useUserAppStore.getState();
  const accessToken = userData.accessToken;

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  } else {
    openModal({
      type: 'alert',
      id: 'need-login',
      props: {
        title: '로그인이 필요한 서비스입니다.',
        description: '"확인"을 누르면 로그인 화면으로 이동합니다.',
        onConfirm: () => {
          window.location.href = '/login';
        },
      },
    });
    return Promise.reject(new Error('No access token, redirecting to login.'));
  }
  return config;
});

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
        const refreshResponse = await publicApi.patch(
          '/refresh',
          {},
          {
            headers: {
              Authorization: `Bearer ${userData.refreshToken}`,
            },
          }
        );

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          refreshResponse.data.data;

        setUserData({
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });

        privateApi.defaults.headers['Authorization'] =
          `Bearer ${newAccessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        return privateApi(originalRequest);
      } catch (refreshError) {
        // 리프래시 토큰까지 만료되었을 때
        openModal({
          type: 'alert',
          id: 'need-login',
          props: {
            title: '로그인 세션이 만료되었습니다.',
            description: '"확인"을 누르면 로그인 화면으로 이동합니다.',
            onConfirm: () => {
              window.location.href = '/login';
              clearUserData();
            },
          },
        });
        return Promise.reject(refreshError);
      }
    }
    // accessToken 정상적으로 동작하지만, 그 외의 에러가 발생한 경우
    // 에러가 발생한 부분에서 각자 처리 필요
    return Promise.reject(error);
  }
);
