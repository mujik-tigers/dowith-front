import { useModalStore, closeModal } from '@/store/use-modal-store';
import {
  ConfirmModal,
  TConfirmModalProps,
} from '@/components/common/modal/confirm-modal/confirm-modal';
import {
  AlertModal,
  TAlertModalProps,
} from '@/components/common/modal/alert-modal/alert-modal';
import {
  UserSettingModal,
  TUserSettingModalProps,
} from '@/components/modal/user-setting-modal/user-setting-modal';
import {
  CreateSpaceModal,
  TCreateSpaceModalProps,
} from '@/components/modal/create-space-modal/create-space-modal';

export const ModalManager = () => {
  const { modals } = useModalStore();

  return (
    <>
      {modals.map((modal) => {
        const { id, type, props } = modal;
        switch (type) {
          case 'confirm':
            return (
              <div key={id}>
                <ConfirmModal
                  {...(props as TConfirmModalProps)}
                  onClose={() => closeModal(id)}
                />
              </div>
            );
          case 'alert':
            return (
              <div key={id}>
                <AlertModal
                  {...(props as TAlertModalProps)}
                  onClose={() => closeModal(id)}
                />
              </div>
            );
          case 'user-setting':
            return (
              <div key={id}>
                <UserSettingModal
                  {...(props as TUserSettingModalProps)}
                  onClose={() => closeModal(id)}
                />
              </div>
            );
          case 'create-space':
            return (
              <div key={id}>
                <CreateSpaceModal
                  {...(props as TCreateSpaceModalProps)}
                  onClose={() => closeModal(id)}
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
