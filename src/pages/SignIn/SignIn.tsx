import { SignInForm, TextInfo } from 'components';
import { useAuth, useTheme } from 'src/store/utils/hooks';

import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';

const cn = classNames.bind(styles);

const SignIn = () => {
  const theme: string = useTheme();
  const isAuth: boolean = !!useAuth().id;

  return (
    <div
      className={cn('container', {
        container_dark: theme === 'dark',
        container_light: theme === 'light',
      })}
    >
      {isAuth ? (
        <TextInfo text={'You\'re already logged in, you can check your contacts or sign out'} />
      ) : (
        <SignInForm theme={theme} />
      )}
    </div>
  );
}

export { SignIn }