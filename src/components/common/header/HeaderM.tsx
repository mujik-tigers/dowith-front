import React, { ReactNode } from 'react';
import tw from 'twin.macro';
import { openModal } from '@/store/use-modal-store';

export const HeaderM: React.FC<{ children: ReactNode }> & {
  Left: React.FC<{ children: ReactNode }>;
  Center: React.FC<{ children: ReactNode }>;
  Right: React.FC<{ children: ReactNode }>;
} = ({ children }) => {
  return (
    <header className="flex w-full justify-between border-b border-line p-4 sticky top-0 bg-pureWhite z-10">
      {children}
    </header>
  );
};

HeaderM.Left = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

HeaderM.Center = ({ children }) => {
  return (
    <Wrapper>
      <TitleWrapper>{children}</TitleWrapper>
    </Wrapper>
  );
};

HeaderM.Right = ({ children }) => {
  return (
    <Wrapper
      onClick={() => {
        openModal({
          type: 'user-setting',
          id: 'user-setting',
        });
      }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = tw.div`flex cursor-pointer items-center`;
const TitleWrapper = tw.div`absolute left-1/2 -translate-x-1/2 transform`;
