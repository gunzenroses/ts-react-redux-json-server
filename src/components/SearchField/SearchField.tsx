import { FC, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';

import styles from './SearchField.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
  onClick: (text: string) => void;
};

const SearchField: FC<Props> = ({ theme, onClick }) => {

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    onClick('hey');
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className={cn('container', {
        container_light: theme === 'light',
        container_dark: theme === 'dark',
      })}
    >
      <button type='submit' className={cn('button')} />
      <input
        className={cn('field', {
          field_light: theme === 'light',
          field_dark: theme === 'dark',
        })}
      />
    </form>
  );
};

export { SearchField };
