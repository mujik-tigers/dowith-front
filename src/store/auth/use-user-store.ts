import { create } from 'zustand';

type TUserData = {
  code: string | null;
  name: string | null;
};

type TUserStore = {
  userData: TUserData;
  setUserData: (userData: Partial<TUserData>) => void;
  clearUserData: () => void;
};

export const useUserStore = create<TUserStore>((set) => ({
  userData: {
    code: null,
    name: null,
  },
  setUserData: (userData) =>
    set((state) => ({
      userData: { ...state.userData, ...userData },
    })),
  clearUserData: () =>
    set(() => ({
      userData: {
        code: null,
        name: null,
      },
    })),
}));
