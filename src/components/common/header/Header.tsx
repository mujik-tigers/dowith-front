import Logo from '@/assets/images/img_log_small.png';
import Avatar from 'boring-avatars';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';
import { openModal } from '@/store/use-modal-store';

export const Header: React.FC<{
  userCode: string;
  userAppName: string;
}> = ({ userCode, userAppName }) => {
  const navigate = useNavigate();

  return (
    <HeaderSection>
      <LogoWrapper onClick={() => navigate('/')}>
        <img src={Logo} alt="do-with 로고" />
        <LogoTitle>dowith</LogoTitle>
      </LogoWrapper>
      <AvatarWrapper
        onClick={() => {
          openModal({
            type: 'user-setting',
            id: 'user-setting',
          });
        }}
      >
        <Avatar name={userCode} variant="beam" size={40} />
        <UserInfo>{userAppName}</UserInfo>
      </AvatarWrapper>
    </HeaderSection>
  );
};

const HeaderSection = tw.header`flex w-full justify-between px-4 py-2`;
const LogoWrapper = tw.div`flex items-center gap-[6px]`;
const LogoTitle = tw.p`text-XB24 tracking-tighter`;
const AvatarWrapper = tw.div`flex cursor-pointer items-center gap-2`;
const UserInfo = tw.p`text-M16`;
