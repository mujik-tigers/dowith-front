import { useModalStore, closeModal } from '@/store/use-modal-store';
import {
  ConfirmModal,
  TConfirmModalProps,
} from '@/components/common/modal/confirm-modal/confirm-modal';

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
          default:
            return null;
        }
      })}
    </>
  );
};
