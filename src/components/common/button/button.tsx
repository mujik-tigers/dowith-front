import { Button as UIButton } from '@/components/ui/button';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof sizeClasses;
  bgColor?: keyof typeof bgColorClasses;
  textColor?: keyof typeof textColorClasses;
  onClick: () => void;
}

const sizeClasses = {
  fixedS: 'h-[36px] w-[72px] rounded-md',
  fixedM: 'h-[40px] w-[160px] rounded-lg',
  fixedL: 'h-[48px] w-[184px] rounded-lg',
  flexibleM: 'h-[40px] w-full rounded-lg',
  flexibleL: 'h-[54px] w-full rounded-xl',
} as const;

const bgColorClasses = {
  red: 'bg-red hover:bg-red/90',
  yellow: 'bg-yellow hover:bg-yellow/90',
  white: 'bg-white',
  black: 'bg-black',
  blue: 'bg-blueLight hover:bg-blueLight/90',
<<<<<<< HEAD
} as const;
=======
};
>>>>>>> adb1e65 (feat: button 컴포넌트 bgColor 색상 추가)

const textColorClasses = {
  text: 'text-text',
  textWeek: 'text-week',
  textActive: 'text-active',
  textWhite: 'text-white',
} as const;

const Button = ({
  children,
  className,
  size = 'flexibleM',
  bgColor = 'red',
  textColor = 'text',
  onClick,
}: IButtonProps) => {
  return (
    <UIButton
      onClick={onClick}
      className={`${sizeClasses[size]} ${bgColorClasses[bgColor]} ${textColorClasses[textColor]} ${className}`}
    >
      {children}
    </UIButton>
  );
};

export default Button;
