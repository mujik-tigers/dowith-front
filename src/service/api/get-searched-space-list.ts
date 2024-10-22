import { privateApi } from '../axios';

export const getSearchedSpaceList = async (
  keyword = '',
  size: number,
  lastUnixTimestamp?: number,
  lastTieBreakerId?: number
): Promise<TSearchedSpaceListResponseData> => {
  try {
    const response = await privateApi.get<TSearchedSpacelistResponse>(
      `/search/teams?title=${encodeURIComponent(keyword)}&size=${size}&lastUnixTimestamp=${lastUnixTimestamp}&lastTieBreakerId=${lastTieBreakerId}`
    );

    return response.data.data;
  } catch (error) {
    throw new Error('스페이스 목록을 불러오는데 실패하였습니다.');
  }
};
