import { create } from 'zustand';
import { TConfirmModalProps } from '@/components/common/modal/confirm-modal/confirm-modal';
import { TAlertModalProps } from '@/components/common/modal/alert-modal/alert-modal';
import { TUserSettingModalProps } from '@/components/user-setting-modal/user-setting-modal';

type TModalType = 'confirm' | 'alert' | 'form' | 'user-setting';

type TModalConfig = {
  type: TModalType;
  id: string;
  props?: TConfirmModalProps | TAlertModalProps | TUserSettingModalProps;
};

type TModalState = {
  modals: TModalConfig[];
};

export const useModalStore = create<TModalState>(() => ({
  modals: [],
}));

export const openModal = (modal: TModalConfig) => {
  useModalStore.setState((state) => {
    // 동일한 id의 모달이 이미 있는지 확인
    const isModalAlreadyOpen = state.modals.some((m) => m.id === modal.id);
    if (isModalAlreadyOpen) {
      return state; // 동일 id를 가진 modal이 존재하면 상태 변경 없음
    }
    return { modals: [...state.modals, modal] }; // 동일 id를 가진 modal이 없으면 추가
  });
};

export const closeModal = (id: string) => {
  useModalStore.setState((state) => ({
    modals: state.modals.filter((modal) => modal.id !== id),
  }));
};
