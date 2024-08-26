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
import { useUserAppStore } from '@/store/auth/use-user-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  newName: z
    .string()
    .trim()
    .min(1, { message: '닉네임은 최소 1자 이상이어야 합니다.' })
    .max(20, { message: '닉네임은 최대 20자 이하로 입력해주세요.' })
    .transform((val) => val.replace(/\s+/g, ' ')), // 연속된 공백 한 칸으로 변환
});

export const UserAppNameSetupPage = () => {
  const { userData } = useUserAppStore();

  /** TODO
   *  userData가 없으면 로그인 페이지, firstTime이 false일 경우는 홈
   * */
  console.log(userData);
  const { mutate: updateUserAppName } = useUpdateUserAppName();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Submitted values:', values);
    const { newName } = values;

    updateUserAppName(newName, {
      onSuccess: () => {
        navigate('/');
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
    <div className="mx-auto flex h-full max-w-[300px] flex-col justify-center">
      <div className="mb-10 flex flex-col gap-3">
        <p className="text-XB20">환영합니다!</p>
        <p className="text-M16">사용하실 닉네임을 정해주세요.</p>
      </div>

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
                  <FormDescription className="pl-2 text-textWeak">
                    닉네임 변경은 프로필 설정에서도 가능합니다.
                  </FormDescription>
                )}
              </FormItem>
            )}
          />
          <div className="mt-16 flex gap-2">
            <Button
              size="flexibleM"
              bgColor="white"
              type="button"
              onClick={() => {
                navigate('/');
              }}
            >
              건너뛰기
            </Button>
            <Button size="flexibleM" bgColor="blue" type="submit">
              시작하기
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
