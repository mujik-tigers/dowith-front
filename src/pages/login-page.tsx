import googleLoginButton from '@/assets/images/google-login-button.svg';
import kakaoLoginButton from '@/assets/images/kakao-login-button.svg';
import { Button } from '@/components/common/button/button';
import { KAKAO_URL, GOOGLE_URL, URL } from '@/constants/api';
import { KAKAO_CLIENT_ID, GOOGLE_CLIENT_ID } from '@/constants/oauth-login';

export const LoginPage = () => {
  const kakaoLoginButtonHandler = () => {
    const state = encodeURIComponent(JSON.stringify({ oauthType: 'kakao' }));
    window.location.href = `${KAKAO_URL}/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${URL}/oauth/redirect&response_type=code&state=${state}`;
  };

  const googleLoginButtonHandler = () => {
    const state = encodeURIComponent(JSON.stringify({ oauthType: 'google' }));
    window.location.href = `${GOOGLE_URL}client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${URL}/oauth/redirect&response_type=code&scope=profile email&state=${state}`;
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-[308px] w-[320px] flex-col items-center gap-10 px-2.5">
        <div className="flex h-[140px] w-[204px] flex-col items-center gap-4">
          <div className="flex h-[128px] w-[300px] flex-col items-start gap-5">
            <Button
              size="flexibleL"
              bgColor="yellow"
              onClick={kakaoLoginButtonHandler}
            >
              <img
                src={kakaoLoginButton}
                alt="kakaoLoginButton"
                className="max-w-none"
              />
            </Button>
            <Button
              size="flexibleL"
              bgColor="white"
              onClick={googleLoginButtonHandler}
            >
              <img
                src={googleLoginButton}
                alt="googleLoginButton"
                className="max-w-none"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
