import React, { FC } from 'react';

import SVG from '../SVG';

interface ButtonProps {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ title, onClick, isLoading }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn ${isLoading ? 'loading' : ''}`}>
      {title}
      <SVG.ArrowRotate width={25} height={25} color="#fff" />
    </button>
  );
};

export default Button;
