import { FC } from 'react';

import styles from './Checkbox.module.scss';

type Props = {
  name: string;
  value: string;
  title: string;
  checked?: boolean;
}

const Checkbox: FC<Props> = ({
  name,
  value,
  title = '',
  checked = false}) => {
  return (
    <label className={styles.container}>
      <input 
        className={styles.real} 
        type='checkbox' 
        name={name}
        value={value}
        checked={checked}
      />
      <span className={styles.fake}></span>
      <span className={styles.title}>{title}</span>
    </label>
  )
};

export { Checkbox };