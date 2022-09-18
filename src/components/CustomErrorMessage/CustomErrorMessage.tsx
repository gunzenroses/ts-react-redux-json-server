import { FC } from "react";
import classNames from "classnames/bind";

import styles from './CustomErrorMessage.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
  message: string;
};

const CustomErrorMessage: FC<Props> = ({ theme, message }) => {
  return (
    <span className={cn('container', {
      'container_light': theme === 'light',
      'container_dark': theme === 'dark',
    })}>
      { message }
    </span>
  )
}

export { CustomErrorMessage }