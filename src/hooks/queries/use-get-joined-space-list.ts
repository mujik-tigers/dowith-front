import { getJoinedSpaceList } from '@/service/api/get-joined-space-list';
import { useQuery } from '@tanstack/react-query';

export const useGetJoinedSpaceList = () => {
  return useQuery({
    queryKey: ['JoinedSpaceList'],
    queryFn: () => getJoinedSpaceList(),
  });
};
