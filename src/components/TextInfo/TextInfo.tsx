import { FC } from 'react';

import styles from './TextInfo.module.scss';

type Props = {
  text: string;
}

const TextInfo: FC<Props> = ({text}) => {
  return <p className={styles.message}>{text}</p>;
}

export { TextInfo };