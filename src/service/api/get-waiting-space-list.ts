import { privateApi } from '../axios';

export const getWaitingSpaceList = async (): Promise<TWaitingSpaceData[]> => {
  try {
    const response = await privateApi.get<TWaitingSpaceResponseData>(
      '/participation-request/me'
    );

    return response.data.data.pendingRequestTeamInfos;
  } catch (error) {
    throw new Error('가입 대기 스페이스 목록을 불러오는데 실패하였습니다.');
  }
};
