import React, { FC } from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<{ value: string }>) => void;
  placeholder: string;
}

const Input: FC<InputProps> = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div>
      <input type="text" id="search" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
