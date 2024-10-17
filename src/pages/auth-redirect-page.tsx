import { useOauthLogin } from '@/hooks/queries/use-oauth-login';
import { useSetUserData } from '@/store/auth/use-user-store';
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
  const setUserData = useSetUserData();

  useEffect(() => {
    if (authorizationCode && oauthType) {
      login(
        { authorizationCode, oauthType },
        {
          onSuccess: (data) => {
            const { code, name, accessToken, refreshToken } = data.data;
            setUserData({
              userCode: code,
              userAppName: name,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
            navigate('/setup/app-name');
          },
        }
      );
    }
  }, [authorizationCode, oauthType, login, navigate, setUserData]);

  return <></>;
};
