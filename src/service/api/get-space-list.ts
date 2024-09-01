import { privateApi } from '../axios';

export const getJoinedSpaceList = async (): Promise<
  TApiResponse<TJoinedSpaceData[]>
> => {
  const { data } = await privateApi.get(`/members/teams`);

  return data;
};
