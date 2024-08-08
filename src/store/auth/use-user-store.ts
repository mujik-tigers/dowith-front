import { create, StateCreator } from 'zustand';
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

const userAppStoreCreator: StateCreator<
  TUserAppStore,
  [],
  [],
  TUserAppStore
> = (set) => ({
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
});

export const useUserAppStore = create<TUserAppStore>()(
  persist(userAppStoreCreator, {
    name: 'user-storage',
    partialize: (state) => ({
      accessToken: state.userData.accessToken,
      refreshToken: state.userData.refreshToken,
    }),
  })
);
