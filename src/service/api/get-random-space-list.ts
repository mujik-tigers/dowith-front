import { privateApi } from '../axios';

export const getRandomSpaceList = async (): Promise<TRandomSpaceData[]> => {
  try {
    const response =
      await privateApi.get<TRandomSpaceResponseData>('/random/teams');

    return response.data.data.randomTeamOutlines;
  } catch (error) {
    throw new Error('추천 스페이스 목록을 불러오는데 실패하였습니다.');
  }
};
