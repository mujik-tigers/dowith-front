type TApiResponse<T> = {
  code: number;
  status: string;
  result: string;
  data: T;
};

type TLoginResponse = TApiResponse<TLoginResponseData>;
