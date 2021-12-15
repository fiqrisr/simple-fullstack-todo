import React from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="inline-block flex items-center text-lg text-white bg-purple-500 shadow-lg font-bold border-0 rounded-2xl px-6 py-2 hover:shadow-xl hover:bg-purple-600 transition-all">
      {children}
    </button>
  );
};

export default Button;
