import React from 'react';

/* eslint-disable-next-line */
export interface IconProps {
  icon: 'plus' | 'trash-empty';
  size?: 'sm' | 'md' | 'lg';
}

export const Icon: React.FC<IconProps> = ({ icon, size = 'sm' }) => {
  return <i className={`icon-${icon} text-${size} mr-2`}></i>;
};

export default Icon;
