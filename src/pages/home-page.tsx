import Logo from '@/assets/images/img_log_small.png';
import { Header } from '@/components/common/header/Header';
import { HeaderM } from '@/components/common/header/HeaderM';
import { useUserAppStore } from '@/store/auth/use-user-store';
import Avatar from 'boring-avatars';

export const HomePage = () => {
  const { userData } = useUserAppStore();

  return (
    <div>
      <Header
        userCode={userData.userCode!}
        userAppName={userData.userAppName!}
      />

      <HeaderM>
        <HeaderM.Left>
          <img src={Logo} alt="do-with 로고" />
        </HeaderM.Left>
        <HeaderM.Center>
          <p className="text-XB24 tracking-tighter">dowith</p>
        </HeaderM.Center>
        <HeaderM.Right>
          <Avatar name={userData.userCode!} variant="beam" size={40} />
        </HeaderM.Right>
      </HeaderM>
    </div>
  );
};
