import { FC } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
  text: string;
  type: 'submit' | 'link';
  href?: string;
};

const Button: FC<Props> = ({
  theme,
  text,
  type,
  href
}) => {

  const buttonClass = cn('container', {
    'container_light': theme === 'light',
    'container_dark': theme === 'dark',
    'container_small': type === 'link',
    'container_large': type === 'submit'
  })

  return href ? (
    <a href={href} className={buttonClass} >
      {text}
    </a>
  ) : (
    <button type='submit' className={buttonClass}>
      {text}
    </button>
  );
}

export { Button };