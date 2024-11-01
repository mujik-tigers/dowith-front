import { useUserCode, useUserAppName } from '@/store/auth/use-user-store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useAuthCheckAndRedirectLogin = () => {
  const userCode = useUserCode();
  const userAppName = useUserAppName();
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!userCode || !userAppName) {
      navigate('/login');
    } else {
      setIsCheckingAuth(false);
    }
  }, [userCode, userAppName, navigate]);

  return isCheckingAuth;
};
