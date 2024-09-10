import { Button as UIButton } from '@/components/ui/button';
import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

const SIZE_CLASSES = {
  fixedS: tw`h-[36px] w-[72px] rounded-md`,
  fixedM: tw`h-[40px] w-[160px] rounded-lg`,
  fixedL: tw`h-[48px] w-[184px] rounded-lg`,
  flexibleM: tw`h-[40px] w-full rounded-lg`,
  flexibleL: tw`h-[54px] w-full rounded-xl`,
} as const;

const BG_COLOR_CLASSES = {
  red: tw`bg-red text-white hover:bg-red/90`,
  yellow: tw`bg-yellow text-text hover:bg-yellow/90`,
  white: tw`border border-line bg-white text-text hover:bg-white/90`,
  black: tw`bg-black text-white hover:bg-black/90`,
  blue: tw`bg-blueLight text-text hover:bg-blueLight/90 `,
} as const;

const MotionButton = styled(motion(UIButton))`
  ${tw`transition-transform duration-150`}
  &:active {
    transform: scale(0.97);
  }
`;

export const Button: React.FC<{
  children: React.ReactNode;
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
  return (
    <MotionButton
      type={type}
      onClick={onClick}
      css={[SIZE_CLASSES[size], BG_COLOR_CLASSES[bgColor]]}
    >
      {children}
    </MotionButton>
  );
};
