type TLoginResponseData = {
  code: string;
  name: string;
  firstTime: boolean;
  accessToken: string;
  refreshToken: string;
};

type TLoginResponse = TApiResponse<TLoginResponseData>;
