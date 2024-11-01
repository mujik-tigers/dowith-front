import { create } from 'zustand';

type TModalType = 'confirm' | 'form';

type TModalState = {
  confirm: boolean;
  form: boolean;
};

// 상태만 관리하는 스토어
export const useModalStore = create<TModalState>(() => ({
  confirm: false,
  form: false,
}));

// 상태를 변경하는 액션만 분리
export const changeModalState = (type: TModalType) => {
  useModalStore.setState((state) => ({ ...state, [type]: !state[type] }));
};

// 상태 조회 훅
export const useConfirmModalState = () =>
  useModalStore((state) => state.confirm);

export const useFormModalState = () => useModalStore((state) => state.form);
