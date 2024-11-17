import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '../../button/button';
import tw, { styled } from 'twin.macro';

export type TAlertModalProps = {
  title: string;
  description: string;
  confirmButtonBgColor?: 'red' | 'black';
  onConfirm: () => void;
  onClose?: () => void;
};

export const AlertModal = ({
  title,
  description,
  confirmButtonBgColor = 'red',
  onConfirm,
  onClose,
}: TAlertModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <ModalContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        hasCloseButton={false}
      >
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        <DialogFooter>
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
  ${tw`font-bold text-lg`}
`;

const ModalDescription = styled(DialogDescription)`
  ${tw`text-B14`}
`;
