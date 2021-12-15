import React from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: () => void | Promise<void>;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className="flex items-center text-md text-white bg-purple-500 shadow-lg font-bold border-0 rounded-2xl px-6 py-2 hover:shadow-xl hover:bg-purple-600 transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
