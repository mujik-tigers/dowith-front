import { useUserAppStore } from '@/store/auth/use-user-store';

export const UserAppNameSetupPage = () => {
  const { userData } = useUserAppStore();

  return <>{userData}</>;
};
