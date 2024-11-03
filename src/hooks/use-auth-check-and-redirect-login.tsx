import { useUserCode, useUserAppName } from '@/store/auth/use-user-store';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { openModal } from '@/store/use-modal-store';

export const useAuthCheckAndRedirectLogin = () => {
  const userCode = useUserCode();
  const userAppName = useUserAppName();
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!userCode || !userAppName) {
      openModal({
        type: 'alert',
        id: 'need-login',
        props: {
          title: '로그인이 필요한 서비스입니다.',
          description: '"확인"을 누르면 로그인 화면으로 이동합니다.',
          onConfirm: () => {
            navigate('/login');
          },
        },
      });
    } else {
      setIsCheckingAuth(false);
    }
  }, [userCode, userAppName, navigate]);

  return isCheckingAuth;
};
