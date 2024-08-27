import { Button as UIButton } from '@/components/ui/button';
import { motion } from 'framer-motion';

const SIZE_CLASSES = {
  fixedS: 'h-[36px] w-[72px] rounded-md',
  fixedM: 'h-[40px] w-[160px] rounded-lg',
  fixedL: 'h-[48px] w-[184px] rounded-lg',
  flexibleM: 'h-[40px] w-full rounded-lg',
  flexibleL: 'h-[54px] w-full rounded-xl',
  rounded: 'size-14 rounded-full border border-line p-3 hover:bg-white',
} as const;

const BG_COLOR_CLASSES = {
  red: 'bg-red hover:bg-red/90 text-white',
  yellow: 'bg-yellow hover:bg-yellow/90 text-text',
  white: 'bg-white text-text hover:bg-white/90 border border-line',
  black: 'bg-black text-white hover:bg-black/90',
  blue: 'bg-blueLight hover:bg-blueLight/90 text-text',
} as const;

export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof SIZE_CLASSES;
  bgColor?: keyof typeof BG_COLOR_CLASSES;
  onClick?: () => void;
  type?: 'button' | 'submit';
}> = ({
  children,
  type = 'button',
  size = 'flexibleM',
  bgColor = 'red',
  onClick,
}) => {
  const MotionButton = motion(UIButton);

  return (
    <MotionButton
      type={type}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`${SIZE_CLASSES[size]} ${BG_COLOR_CLASSES[bgColor]}`}
    >
      {children}
    </MotionButton>
  );
};
