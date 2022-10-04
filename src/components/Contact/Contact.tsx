import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './Contact.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
  children: string;
  onClick: (text: string) => void;
}

const Contact: FC<Props> = ({ theme, children, onClick }) => {

  const onClickHandler = () => {
    onClick(children);
  };

  return (
    <div
      className={styles.container}
    >
      <button type='button' className={styles.button} onClick={onClickHandler}>
        X
      </button>
      <div
        className={cn('field', {
          field_light: theme === 'light',
          field_dark: theme === 'dark',
        })}
      >
        {children}
      </div>
    </div>
  );
};

export { Contact };