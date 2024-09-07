import { privateApi } from '../axios';

type TJoinedSpaceDataResponse = {
  data: {
    teamOutlineList: TJoinedSpaceData[];
  };
};

export const getJoinedSpaceList = async (): Promise<TJoinedSpaceData[]> => {
  const response =
    await privateApi.get<TJoinedSpaceDataResponse>('/members/teams');

  return response.data.data.teamOutlineList;
};
