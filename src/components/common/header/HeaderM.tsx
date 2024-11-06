import React, { ReactNode } from 'react';
import tw from 'twin.macro';

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
  return <Wrapper className="flex items-center">{children}</Wrapper>;
};

HeaderM.Center = ({ children }) => {
  return (
    <Wrapper>
      <TitleWrapper className="absolute left-1/2 -translate-x-1/2 transform">
        {children}
      </TitleWrapper>
    </Wrapper>
  );
};

HeaderM.Right = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = tw.div`flex items-center`;
const TitleWrapper = tw.div`absolute left-1/2 -translate-x-1/2 transform`;
