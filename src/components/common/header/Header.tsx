import Logo from '@/assets/images/img_log_small.png';
import Avatar from 'boring-avatars';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC<{
  userCode: string;
  userAppName: string;
}> = ({ userCode, userAppName }) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between px-4 py-2">
      <div
        className="flex items-center gap-[6px]"
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="do-with 로고" />
        <p className="text-XB24 tracking-tighter">dowith</p>
      </div>

      <div className="flex items-center gap-2">
        <Avatar name={userCode} variant="beam" size={40} />
        <p className="text-M16">{userAppName}</p>
      </div>
    </header>
  );
};
