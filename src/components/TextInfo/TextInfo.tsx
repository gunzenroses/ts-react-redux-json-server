import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './TextInfo.module.scss';

const cn = classNames.bind(styles);

type Props = {
  text: string;
  type?: string;
}

const TextInfo: FC<Props> = ({
  text,
  type = 'main'
}) => {
  return <p className={cn('message', {
    'message_main': type === 'main',
    'message_secondary': type !== 'main'
  })}>{text}</p>;
}

export { TextInfo };