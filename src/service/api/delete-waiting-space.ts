import { privateApi } from '../axios';

export const deleteWaitingSpace = async (requestId: number) => {
  try {
    const response = await privateApi.put(
      `/participation-request/me/${requestId}/delete`
    );

    return response;
  } catch (error) {
    throw new Error('스페이스 가입 요청 취소에 실패하였습니다.');
  }
};
