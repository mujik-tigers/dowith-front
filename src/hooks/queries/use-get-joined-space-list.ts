import { getJoinedSpaceList } from '@/service/api/get-space-list';
import { useQuery } from '@tanstack/react-query';

export const useGetJoinedSpaceList = () => {
  return useQuery({
    queryKey: ['JoinedSpaceList'],
    queryFn: () => getJoinedSpaceList(),
  });
};
