import { FC } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
  text: string;
  type: 'submit' | 'button';
  href?: string;
  onPointerUp?: () => void;
};

const Button: FC<Props> = ({ theme, text, type, href, onPointerUp }) => {
  const buttonClass = cn('container', {
    container_light: theme === 'light',
    container_dark: theme === 'dark',
    container_small: type === 'button',
    container_large: type === 'submit',
  });

  return href ? (
    <a href={href} className={buttonClass}>
      {text}
    </a>
  ) : (
    <button type={type} className={buttonClass} onPointerUp={onPointerUp}>
      {text}
    </button>
  );
};

export { Button };