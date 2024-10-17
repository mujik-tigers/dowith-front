import { privateApi } from '../axios';

export const getJoinedSpaceList = async (): Promise<TJoinedSpaceData[]> => {
  try {
    const response =
      await privateApi.get<TJoinedSpaceResponseData>('/members/teams');

    return response.data.data.teamOutlines;
  } catch (error) {
    throw new Error('참여중인 스페이스 목록을 불러오는데 실패하였습니다.');
  }
};
