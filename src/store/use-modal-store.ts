import { create } from 'zustand';
import { TConfirmModalProps } from '@/components/common/modal/confirm-modal/confirm-modal';

type TModalType = 'confirm' | 'form';

type TModalConfig = {
  type: TModalType;
  id: string;
  props?: TConfirmModalProps; // alert, form 모달의 props 타입을 여기에 추가
};

type TModalState = {
  modals: TModalConfig[];
};

export const useModalStore = create<TModalState>(() => ({
  modals: [],
}));

export const openModal = (modal: TModalConfig) => {
  useModalStore.setState((state) => ({
    modals: [...state.modals, modal],
  }));
};

export const closeModal = (id: string) => {
  useModalStore.setState((state) => ({
    modals: state.modals.filter((modal) => modal.id !== id),
  }));
};
