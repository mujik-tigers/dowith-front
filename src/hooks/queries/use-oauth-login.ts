import { login } from '@/service/api/login';
import { useMutation } from '@tanstack/react-query';

export const useOauthLogin = () => {
  return useMutation({
    mutationFn: ({
      authorizationCode,
      oauthType,
    }: {
      authorizationCode: string;
      oauthType: string;
    }) => login({ authorizationCode, oauthType }),
  });
};
