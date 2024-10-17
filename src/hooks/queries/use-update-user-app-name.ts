import { updateUserAppName } from '@/service/api/user-app-name';
import { useMutation } from '@tanstack/react-query';

export const useUpdateUserAppName = () => {
  return useMutation({
    mutationFn: (newName: string) => updateUserAppName(newName),
  });
};
