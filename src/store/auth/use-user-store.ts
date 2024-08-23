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
