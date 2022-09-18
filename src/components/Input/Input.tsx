import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(({
  type = 'text',
  placeholder = '',
}, ref) => {

  return (
    <input
      ref={ref}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      autoComplete='new-password'
    ></input>
  );
});

export { Input };