import React, { ReactNode } from 'react';

export const HeaderM: React.FC<{ children: ReactNode }> & {
  Left: React.FC<{ children: ReactNode }>;
  Center: React.FC<{ children: ReactNode }>;
  Right: React.FC<{ children: ReactNode }>;
} = ({ children }) => {
  return (
    <header className="flex w-full justify-between border-b border-line p-4">
      {children}
    </header>
  );
};

HeaderM.Left = ({ children }) => {
  return <div className="flex items-center">{children}</div>;
};

HeaderM.Center = ({ children }) => {
  return (
    <div className="flex items-center">
      <div className="absolute left-1/2 -translate-x-1/2 transform">
        {children}
      </div>
    </div>
  );
};

HeaderM.Right = ({ children }) => {
  return <div className="flex items-center">{children}</div>;
};
