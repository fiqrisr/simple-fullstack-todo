import React from 'react';

/* eslint-disable-next-line */
export interface AppBarProps {
  title: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title }) => {
  return (
    <div className="w-full shadow-lg text-center text-lg bg-purple-500 font-bold text-white py-2">
      {title}
    </div>
  );
};

export default AppBar;
