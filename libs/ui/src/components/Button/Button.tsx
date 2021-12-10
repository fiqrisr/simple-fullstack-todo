import React from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="inline-block flex items-center text-lg text-white bg-purple-500 shadow-lg font-bold border-0 rounded-2xl px-6 py-2">
      <i className="icon-plus text-sm mr-2"></i> {children}
    </button>
  );
};

export default Button;
