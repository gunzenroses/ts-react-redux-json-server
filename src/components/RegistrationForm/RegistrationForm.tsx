import { ChangeEvent, useState } from 'react';
import classNames from 'classnames/bind';

import { useTheme } from 'src/store/utils/hooks';
import { Button, Input } from 'components';

import styles from './RegistrationForm.module.scss';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

const RegistrationForm = () => {
  const theme: string = useTheme();

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  }; 

  return (
    <form className={styles.container}>
      <h1
        className={cn('title', {
          title_light: theme === 'light',
          title_dark: theme === 'dark',
        })}
      >
        Registration
      </h1>
      <Input
        name='email'
        type='email'
        placeholder='Login'
        value={email}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Input
        name='password'
        type='password'
        placeholder='Password'
        value={email}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Button type='submit' theme='light' text='Submit' />
      <p
        className={cn('subtitle', {
          subtititle_light: theme === 'light',
          subtitle_dark: theme === 'dark',
        })}
      >
        Already have an account?
        <Link
          to='./signin'
          className={cn('link', {
            link_light: theme === 'light',
            link_dark: theme === 'dark',
          })}
        >
          Registration
        </Link>
      </p>
    </form>
  );
}

export { RegistrationForm }