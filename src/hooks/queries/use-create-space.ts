import { useMutation } from '@tanstack/react-query';
import { createSpace } from '@/service/api/create-space';

export const useCreateSpace = () => {
  return useMutation({
    mutationFn: ({ spaceData }: { spaceData: FormData }) =>
      createSpace({ spaceData }),
  });
};
