import React from 'react';

/* eslint-disable-next-line */
export interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-w-full my-4">
      <div className="w-80 flex items-center flex-col">{children}</div>
    </div>
  );
};

export default AppLayout;
