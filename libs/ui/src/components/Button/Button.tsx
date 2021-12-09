import React from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
