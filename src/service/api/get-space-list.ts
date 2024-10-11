import { privateApi } from '../axios';

type TJoinedSpaceDataResponse = {
  data: {
    teamOutlineList: TJoinedSpaceData[];
  };
};

export const getJoinedSpaceList = async (): Promise<TJoinedSpaceData[]> => {
  try {
    const response =
      await privateApi.get<TJoinedSpaceDataResponse>('/members/teams');

    return response.data.data.teamOutlineList;
  } catch (error) {
    throw new Error('참여중인 스페이스 목록을 불러오는데 실패하였습니다.');
  }
};
