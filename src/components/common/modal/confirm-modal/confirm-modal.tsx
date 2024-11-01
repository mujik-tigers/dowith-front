import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '../../button/button';
import {
  useConfirmModalState,
  changeModalState,
} from '@/store/use-modal-store';
import styled from 'styled-components';
import tw from 'twin.macro';

export const ConfirmModal: React.FC<{
  title: string;
  description: string;
  confirmButtonBgColor?: 'red' | 'black';
  onConfirm?: () => void;
}> = ({ title, description, confirmButtonBgColor, onConfirm }) => {
  const confirmModalState = useConfirmModalState();

  const handleCloseModal = () => {
    changeModalState('confirm');
  };
  return (
    <Dialog open={confirmModalState} onOpenChange={handleCloseModal}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button bgColor="white">취소</Button>
          </DialogClose>
          <Button bgColor={confirmButtonBgColor} onClick={onConfirm}>
            확인
          </Button>
        </DialogFooter>
      </ModalContent>
    </Dialog>
  );
};

const ModalContent = styled(DialogContent)`
  ${tw`flex h-40 w-80 flex-col gap-4 p-5`}
`;

const ModalHeader = styled(DialogHeader)`
  ${tw`flex flex-col gap-3`}
`;

const ModalTitle = styled(DialogTitle)`
  ${tw`text-B16`}
`;

const ModalDescription = styled(DialogDescription)`
  ${tw`text-B14`}
`;
