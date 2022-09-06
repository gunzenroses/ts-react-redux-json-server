import { FC, SyntheticEvent } from 'react';

import styles from './ButtonIcon.module.scss';

type Props = {
  imgSrc: string;
  onClick?: () => void;
};

const ButtonIcon: FC<Props> = ({ imgSrc, onClick }) => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  }

  return (
    <button type='button' className={styles.container} onClick={handleClick}>
      <img className={styles.image} src={imgSrc} alt='switch button'></img>
    </button>
  );
};

export { ButtonIcon };