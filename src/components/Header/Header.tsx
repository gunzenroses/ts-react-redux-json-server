import { FC } from 'react';

import classNames from 'classnames/bind';

import { useMyDispatch, useTheme } from 'src/store/utils/hooks';
import { changeTheme } from 'src/store/slices/themeSlice';
import switcher from 'assets/images/switcher.png';
import { ButtonIcon } from 'components';

import { UserMenu } from './UserMenu/UserMenu';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

type Props = {
  isAuth: boolean;
}

const Header: FC<Props> = ({ 
  isAuth
}) => {
  const theme: string = useTheme();

  const dispatch = useMyDispatch();

  const handleClick = () => {
    if (theme === 'dark') {
      dispatch(changeTheme('light'))
    };
    if (theme === 'light') {
      dispatch(changeTheme('dark'))
    };
  }

  return (
    <header
      className={cn('container', {
        container_dark: theme === 'dark',
        container_light: theme === 'light',
      })}
    >
      <ButtonIcon imgSrc={switcher} onClick={handleClick}/>
      <nav className={styles.navigation}>
        <UserMenu isAuth={isAuth} theme={theme} />
      </nav>
    </header>
  );
}

export { Header }