import { getSearchedSpaceList } from '@/service/api/get-searched-space-list';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetSearchedSpaceList = (
  keyword = '',
  spaceRequestCount: number
) => {
  const { data, isPending, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['rooms', keyword, spaceRequestCount],
      queryFn: ({
        pageParam = {
          lastUnixTimestamp: 0,
          lastTieBreakerId: '0',
        },
      }) =>
        getSearchedSpaceList(
          keyword,
          spaceRequestCount,
          pageParam.lastUnixTimestamp,
          pageParam.lastTieBreakerId
        ),
      initialPageParam: { lastUnixTimestamp: 0, lastTieBreakerId: '0' },
      getNextPageParam: ({ hasMore, lastUnixTimestamp, lastTieBreakerId }) =>
        hasMore ? { lastUnixTimestamp, lastTieBreakerId } : null,
      staleTime: 1000 * 60,
    });

  return { data, isPending, hasNextPage, fetchNextPage, isFetchingNextPage };
};
