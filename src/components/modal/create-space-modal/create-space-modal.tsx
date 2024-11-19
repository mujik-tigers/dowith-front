import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '../../common/button/button';
import tw, { styled } from 'twin.macro';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/common/input/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImageInput } from '@/components/image-input/image-input';
import { useCreateSpace } from '@/hooks/queries/use-create-space';

// import { useNavigate } from 'react-router-dom';

const imageExtensions = ['jpg', 'jpeg', 'png'] as const;

const createSpaceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, { message: '스페이스 이름은 최소 1자 이상이어야 합니다.' })
    .max(20, { message: '스페이스 이름은 최대 10자 이하로 입력해주세요.' })
    .transform((val) => val.replace(/\s+/g, ' ')),
  description: z
    .string()
    .trim()
    .min(1, '스페이스 설명은 최소 1자 이상이어야 합니다.')
    .max(20, '스페이스 설명은 최대 20자 이하로 입력해주세요.')
    .transform((val) => val.replace(/\s+/g, ' ')),
  image: z
    .instanceof(File)
    .refine(
      (file) => {
        const fileName = file.name?.toLowerCase();
        return imageExtensions.some((ext) => fileName?.endsWith(ext));
      },
      {
        message:
          '유효하지 않은 이미지 형식입니다. 허용된 형식은 jpg, jpeg, png, gif 입니다.',
      }
    )
    .optional()
    .nullable(),
});

export type TCreateSpaceModalProps = {
  onClose?: () => void;
};

export const CreateSpaceModal = ({ onClose }: TCreateSpaceModalProps) => {
  // const navigate = useNavigate(); 모달 생성 후에 해당 스페이스 페이지로 이동할 때 사용
  const { mutate: createSpace } = useCreateSpace();

  const form = useForm<z.infer<typeof createSpaceSchema>>({
    resolver: zodResolver(createSpaceSchema),
    defaultValues: {
      title: '',
      description: '',
      image: null,
    },
  });

  const submitCreateSpace = (data: z.infer<typeof createSpaceSchema>) => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    if (data.image) formData.append('image', data.image);

    createSpace(
      { spaceData: formData },
      {
        onSuccess: () => {
          onClose && onClose();
          // teamId를 받아와서 해당 스페이스 이동
        },
      }
    );
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>스페이스 생성하기</ModalTitle>
          <ModalDescription>새로운 스페이스 생성하기</ModalDescription>
        </ModalHeader>

        <Form {...form}>
          <form
            className="gap-4 flex flex-col"
            onSubmit={form.handleSubmit(submitCreateSpace)}
          >
            <InputWrapper>
              <InputLabel htmlFor="title">스페이스 이름</InputLabel>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        borderType="outline"
                        placeholder="스페이스 이름을 입력해주세요."
                        id="title"
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.title && (
                      <FormMessage className="pl-2 text-red" />
                    )}
                  </FormItem>
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="description">스페이스 설명</InputLabel>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        borderType="outline"
                        placeholder="스페이스에 대한 설명을 입력하세요."
                        id="description"
                        {...field}
                      />
                    </FormControl>
                    {form.formState.errors.description && (
                      <FormMessage className="pl-2 text-red" />
                    )}
                  </FormItem>
                )}
              />
            </InputWrapper>
            <InputWrapper>
              <InputLabel>스페이스 대표 이미지</InputLabel>
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ImageInput {...field} />
                    </FormControl>
                    {form.formState.errors.image && (
                      <FormMessage className="pl-2 text-red" />
                    )}
                  </FormItem>
                )}
              />
            </InputWrapper>
            <Button type="submit" size="flexibleM" bgColor="black">
              개설하기
            </Button>
          </form>
        </Form>
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
  ${tw`sr-only`}
`;

const InputWrapper = tw.div`flex flex-col gap-2`;
const InputLabel = tw.label`text-B14`;
