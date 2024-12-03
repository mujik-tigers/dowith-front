import { useMutation } from '@tanstack/react-query';
import { deleteWaitingSpace } from '@/service/api/delete-waiting-space';

export const useDeleteWaitingSpace = () => {
  return useMutation({
    mutationFn: (requestId: number) => deleteWaitingSpace(requestId),
  });
};
