import { Button } from '@/components/common/button/button';
import { Input } from '@/components/common/input/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { useUpdateUserAppName } from '@/hooks/queries/use-update-user-app-name';
import { useSetUserData } from '@/store/auth/use-user-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import tw from 'twin.macro';
import { useAuthCheckAndRedirectLogin } from '@/hooks/use-auth-check-and-redirect-login';

const formSchema = z.object({
  newName: z
    .string()
    .trim()
    .min(1, { message: '닉네임은 최소 1자 이상이어야 합니다.' })
    .max(20, { message: '닉네임은 최대 20자 이하로 입력해주세요.' })
    .transform((val) => val.replace(/\s+/g, ' ')), // 연속된 공백 한 칸으로 변환
});

export const UserAppNameSetupPage = () => {
  const setUserData = useSetUserData();

  const { mutate: updateUserAppName, isPending: isUpdatingNickname } =
    useUpdateUserAppName();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newName: '',
    },
  });

  const isCheckingAuth = useAuthCheckAndRedirectLogin();

  if (isCheckingAuth) {
    return <></>;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { newName } = values;

    updateUserAppName(newName, {
      onSuccess: () => {
        setUserData({ userAppName: newName });
        navigate('/home');
      },
      onError(error) {
        console.log(error, 'errrrrrrrrrrrrrrrrrr');
        /**
         * TODO. 에러처리 관련 : 다시 로그인 해달라는 토스트 + 로그인 페이지로 보내기
         */
      },
    });
  }

  return (
    <PageWrapper>
      <WelcomeMessageWrapper>
        <WelcomeTitle>환영합니다!</WelcomeTitle>
        <WelcomeDescription>사용하실 닉네임을 정해주세요.</WelcomeDescription>
      </WelcomeMessageWrapper>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    닉네임 변경은 프로필 설정에서도 가능합니다.
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <ButtonWrapper>
            <Button
              size="flexibleM"
              bgColor="white"
              type="button"
              onClick={() => {
                navigate('/home');
              }}
            >
              건너뛰기
            </Button>
            <Button
              size="flexibleM"
              bgColor="blue"
              type="submit"
              disabled={isUpdatingNickname}
            >
              시작하기
            </Button>
          </ButtonWrapper>
        </form>
      </Form>
    </PageWrapper>
  );
};

const PageWrapper = tw.div`mx-auto flex h-full flex-col justify-center max-w-[300px]`;
const WelcomeMessageWrapper = tw.div`mb-10 flex flex-col gap-3`;
const WelcomeTitle = tw.p`text-XB20`;
const WelcomeDescription = tw.p`text-M16`;
const ButtonWrapper = tw.div`mt-16 flex gap-2`;
