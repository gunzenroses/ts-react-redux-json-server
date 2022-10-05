import { FC, SyntheticEvent } from 'react';

import styles from './SearchItem.module.scss';

type Props = {
  email: string;
  index: number;
  onClick: (index: number) => void;
};

const SearchItem: FC<Props> = ({ email, index, onClick }) => {
  const onClickHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick(index);
  };
  return (
    <div className={styles.container} onClick={onClickHandler}>
      {email}
    </div>
  );
};

export { SearchItem };