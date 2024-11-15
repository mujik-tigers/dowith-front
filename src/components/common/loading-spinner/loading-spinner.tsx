import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const LoadingSpinner = () => {
  return (
    <Spinner
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    />
  );
};

const Spinner = styled(motion.div)`
  ${tw`h-14 w-14 rounded-full border-4 border-gray-100 border-t-red border-solid`}
`;
