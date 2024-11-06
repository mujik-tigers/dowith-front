import googleLoginButton from '@/assets/images/google-login-button.svg';
import kakaoLoginButton from '@/assets/images/kakao-login-button.svg';
import { Button } from '@/components/common/button/button';
import { KAKAO_URL, GOOGLE_URL, URL } from '@/constants/api';
import { KAKAO_CLIENT_ID, GOOGLE_CLIENT_ID } from '@/constants/oauth-login';
import tw from 'twin.macro';
import DowithLogo from '@/assets/images/dowith-logo.svg';

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
    <LoginPageWrapper>
      <LoginPageContent>
        <LogoWrapper>
          <img src={DowithLogo} alt="dowith-logo" />
          <LoginText>로그인</LoginText>
          <Description>dowith에 오신걸 환영합니다.</Description>
          <Description>당신의 팀과 함께 더 나은 목표를 이뤄보세요.</Description>
        </LogoWrapper>
        <LoginButtonWrapper>
          <Button
            size="flexibleL"
            bgColor="yellow"
            onClick={kakaoLoginButtonHandler}
          >
            <LoginButtonImage src={kakaoLoginButton} alt="kakaoLoginButton" />
          </Button>
          <Button
            size="flexibleL"
            bgColor="white"
            onClick={googleLoginButtonHandler}
          >
            <LoginButtonImage src={googleLoginButton} alt="googleLoginButton" />
          </Button>
        </LoginButtonWrapper>
      </LoginPageContent>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = tw.div`absolute inset-0 flex items-center justify-center`;
const LoginPageContent = tw.div`flex flex-col items-center gap-10 px-2.5 h-[308px] w-[320px]`;
const LogoWrapper = tw.div`flex flex-col items-center gap-4`;
const LoginButtonWrapper = tw.div`flex flex-col items-start gap-5 w-[300px]`;
const LoginButtonImage = tw.img`max-w-none`;
const LoginText = tw.span`text-XB24 text-title`;
const Description = tw.span`text-M16 text-title`;
