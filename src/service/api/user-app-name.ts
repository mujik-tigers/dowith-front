import { privateApi } from './../axios';

export const updateUserAppName = async (
  newName: string
): Promise<TApiResponse<{ newName: string }>> => {
  const { data } = await privateApi.patch('/members/names', newName);
  return data;
};

