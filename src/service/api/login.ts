import { API_URL } from '@/constants/api';
import axios, { AxiosResponse } from 'axios';

export const login = async ({
  authorizationCode,
  oauthType,
}: {
  authorizationCode: string;
  oauthType: string;
}): Promise<AxiosResponse<TLoginResponse>> => {
  try {
    const response = await axios.post(
      `${API_URL}/oauth/${oauthType}?authorizationCode=${authorizationCode}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error('로그인에 실패하였습니다. 잠시 후 다시 시도해주세요.');
  }
};
