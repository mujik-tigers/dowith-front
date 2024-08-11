import { Button as UIButton } from '@/components/ui/button';

const SIZE_CLASSES = {
  fixedS: 'h-[36px] w-[72px] rounded-md',
  fixedM: 'h-[40px] w-[160px] rounded-lg',
  fixedL: 'h-[48px] w-[184px] rounded-lg',
  flexibleM: 'h-[40px] w-full rounded-lg',
  flexibleL: 'h-[54px] w-full rounded-xl',
} as const;

const BG_COLOR_CLASSES = {
  red: 'bg-red hover:bg-red/90',
  yellow: 'bg-yellow hover:bg-yellow/90',
  white: 'bg-white',
  black: 'bg-black',
  blue: 'bg-blueLight hover:bg-blueLight/90',
} as const;

const TEXT_COLOR_CLASSES = {
  text: 'text-text',
  textWeak: 'text-textWeak',
  textActive: 'text-textActive',
  textWhite: 'text-white',
} as const;

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof SIZE_CLASSES;
  bgColor?: keyof typeof BG_COLOR_CLASSES;
  textColor?: keyof typeof TEXT_COLOR_CLASSES;
  onClick: () => void;
}> = ({
  children,
  className,
  size = 'flexibleM',
  bgColor = 'red',
  textColor = 'text',
  onClick,
}) => {
  return (
    <UIButton
      onClick={onClick}
      className={`${SIZE_CLASSES[size]} ${BG_COLOR_CLASSES[bgColor]} ${TEXT_COLOR_CLASSES[textColor]} ${className}`}
    >
      {children}
    </UIButton>
  );
};
