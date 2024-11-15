import { useQuery } from '@tanstack/react-query';
import { getRandomSpaceList } from '@/service/api/get-random-space-list';

export const useGetRandomSpaceList = () => {
  return useQuery({
    queryKey: ['randomSpaceList'],
    queryFn: () => getRandomSpaceList(),
  });
};
