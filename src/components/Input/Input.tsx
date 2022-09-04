import React, { ChangeEvent, FC } from 'react';
import styles from './Input.module.scss';

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e);
  };

  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
    ></input>
  );
};

export { Input };