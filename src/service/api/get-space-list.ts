import { privateApi } from '../axios';

export const getJoinedSpaceList = async (): Promise<TJoinedSpaceData[]> => {
  const response = await privateApi.get<TJoinedSpaceData[]>('/members/teams');

  return response.data;
};
