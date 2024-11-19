import { useQuery } from '@tanstack/react-query';
import { getWaitingSpaceList } from '@/service/api/get-waiting-space-list';

export const useGetWaitingSpaceList = () => {
  return useQuery({
    queryKey: ['waitingSpaceList'],
    queryFn: () => getWaitingSpaceList(),
  });
};
