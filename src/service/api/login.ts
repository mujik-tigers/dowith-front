import { API_URL } from '@/constants/api';
import axios from 'axios';

export const login = async ({
  authorizationCode,
  oauthType,
}: {
  authorizationCode: string;
  oauthType: string;
}): Promise<TLoginResponseData> => {
  try {
    const response = await axios.post<TLoginResponse>(
      `${API_URL}/oauth/${oauthType}?authorizationCode=${authorizationCode}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.data;
  } catch (error) {
    throw new Error('로그인에 실패하였습니다. 잠시 후 다시 시도해주세요.');
  }
};
