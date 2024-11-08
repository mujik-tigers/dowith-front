import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '../../components/common/button/button';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/common/input/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUpdateUserAppName } from '@/hooks/queries/use-update-user-app-name';
import { useSetUserData, useClearUserData } from '@/store/auth/use-user-store';
import { useNavigate } from 'react-router-dom';

const nicknameSchema = z.object({
  newName: z
    .string()
    .trim()
    .min(1, { message: '닉네임은 최소 1자 이상이어야 합니다.' })
    .max(20, { message: '닉네임은 최대 20자 이하로 입력해주세요.' })
    .transform((val) => val.replace(/\s+/g, ' ')),
});

export type TUserSettingModalProps = {
  onClose?: () => void;
};

export const UserSettingModal = ({ onClose }: TUserSettingModalProps) => {
  const navigate = useNavigate();
  const setUserData = useSetUserData();
  const clearUserData = useClearUserData();
  const { mutate: updateUserAppName, isPending: isUpdatingNickname } =
    useUpdateUserAppName();

  const form = useForm<z.infer<typeof nicknameSchema>>({
    resolver: zodResolver(nicknameSchema),
    defaultValues: {
      newName: '',
    },
  });

  const submitNicknameChange = (value: z.infer<typeof nicknameSchema>) => {
    const { newName } = value;

    updateUserAppName(newName, {
      onSuccess: () => {
        setUserData({ userAppName: newName });
        form.reset({ newName: '' });
      },
      onError: () => {
        //
      },
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>설정</ModalTitle>
          <ModalDescription>닉네임 변경하기</ModalDescription>
        </ModalHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitNicknameChange)}>
            <FormField
              control={form.control}
              name="newName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      borderType="outline"
                      placeholder="닉네임을 입력해주세요."
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.newName ? (
                    <FormMessage className="pl-2 text-red" />
                  ) : (
                    <FormDescription className=" text-textWeak pl-2">
                      dowith에서 사용하실 닉네임을 입력해주세요.
                    </FormDescription>
                  )}
                </FormItem>
              )}
            />
            <ButtonWrapper>
              <Button
                size="flexibleM"
                bgColor="yellow"
                type="submit"
                onClick={() => {}}
                disabled={isUpdatingNickname}
              >
                변경하고 저장
              </Button>
            </ButtonWrapper>
            <Divider />
          </form>
        </Form>
        <DialogFooter>
          <Button
            bgColor="white"
            onClick={() => {
              // 로그아웃 추가 로직
              onClose && onClose();
              clearUserData();
              navigate('/');
            }}
          >
            로그아웃
          </Button>
          <Button
            bgColor="red"
            onClick={() => {
              // 회원탈퇴 추가로직
              onClose && onClose();
              clearUserData();
              navigate('/');
            }}
          >
            회원탈퇴
          </Button>
        </DialogFooter>
      </ModalContent>
    </Dialog>
  );
};

const ModalContent = styled(DialogContent)`
  ${tw`flex w-80 flex-col gap-4 p-5 md:w-72`}
`;

const ModalHeader = styled(DialogHeader)`
  ${tw`flex flex-col gap-3 text-start`}
`;

const ModalTitle = styled(DialogTitle)`
  ${tw`items-start text-B16`}
`;

const ModalDescription = styled(DialogDescription)`
  ${tw`text-B14`}
`;

const Divider = tw.div`mt-4 flex w-full border border-line border-solid`;
const ButtonWrapper = tw.div`mt-2`;
