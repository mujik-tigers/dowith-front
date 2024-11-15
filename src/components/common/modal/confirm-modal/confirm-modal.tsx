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
import styled from 'styled-components';
import tw from 'twin.macro';

export type TConfirmModalProps = {
  title: string;
  description: string;
  confirmButtonBgColor?: 'red' | 'black';
  onConfirm: () => void;
  onClose?: () => void;
};

export const ConfirmModal = ({
  title,
  description,
  confirmButtonBgColor,
  onConfirm,
  onClose,
}: TConfirmModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button bgColor="white">취소</Button>
          </DialogClose>
          <Button
            bgColor={confirmButtonBgColor}
            onClick={() => {
              onConfirm();
              onClose && onClose();
            }}
          >
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
