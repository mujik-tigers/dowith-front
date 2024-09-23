import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TUserAppData = {
  userCode: string | null;
  userAppName: string | null;
  accessToken: string | null;
  refreshToken: string | null;
};

type TUserAppStore = {
  userData: TUserAppData;
  setUserData: (userData: Partial<TUserAppData>) => void;
  clearUserData: () => void;
};

export const useUserAppStore = create<TUserAppStore>()(
  persist(
    (set) => ({
      userData: {
        userCode: null,
        userAppName: null,
        accessToken: null,
        refreshToken: null,
      },
      setUserData: (userData) =>
        set((state) => ({
          userData: { ...state.userData, ...userData },
        })),
      clearUserData: () =>
        set(() => ({
          userData: {
            userCode: null,
            userAppName: null,
            accessToken: null,
            refreshToken: null,
          },
        })),
    }),
    {
      name: 'user-app-data-storage',
    }
  )
);

// 특정 상태를 구독하기 위한 커스텀 훅들
export const useUserInfo = () =>
  useUserAppStore((state) => ({
    userAppName: state.userData.userAppName,
    userCode: state.userData.userCode,
  }));
export const useUserCode = () =>
  useUserAppStore((state) => state.userData.userCode);
export const useUserAppName = () =>
  useUserAppStore((state) => state.userData.userAppName);
export const useAccessToken = () =>
  useUserAppStore((state) => state.userData.accessToken);
export const useRefreshToken = () =>
  useUserAppStore((state) => state.userData.refreshToken);

// setUserData와 clearUserData를 위한 훅
export const useSetUserData = () =>
  useUserAppStore((state) => state.setUserData);
export const useClearUserData = () =>
  useUserAppStore((state) => state.clearUserData);
