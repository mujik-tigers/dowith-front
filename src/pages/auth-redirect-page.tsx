import { useOauthLogin } from '@/hooks/use-oauth-login';
import { useUserStore } from '@/store/auth/use-user-store';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const AuthRedirectPage = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const authorizationCode = params.get('code') as string;
  const stateParam = params.get('state');
  const oauthType =
    stateParam && JSON.parse(decodeURIComponent(stateParam)).oauthType;

  const { mutate: login } = useOauthLogin();
  const { setUserData } = useUserStore();

  useEffect(() => {
    if (authorizationCode && oauthType) {
      login(
        { authorizationCode, oauthType },
        {
          onSuccess: (data) => {
            setUserData({
              code: data.data.data.code,
              name: data.data.data.name,
            });
            navigate('/');
          },
        }
      );
    }
  }, [authorizationCode, oauthType, login, navigate, setUserData]);

  return <></>;
};
