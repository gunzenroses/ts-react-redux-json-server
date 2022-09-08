import { ChangeEvent, FC, useState } from 'react';
import classNames from 'classnames/bind';

import { useTheme } from 'src/store/utils/hooks';
import { Button, Input } from 'components';

import styles from './RegistrationForm.module.scss';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
}

const RegistrationForm: FC<Props> = ({ theme }) => {

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
          'title_light': theme === 'light',
          'title_dark': theme === 'dark',
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
      <div className={styles.button}>
        <Button type='submit' theme='light' text='Submit' />
      </div>
      <p
        className={cn('subtitle', {
          'subtitle_light': theme === 'light',
          'subtitle_dark': theme === 'dark',
        })}
      >
        Already have an account?
        <Link
          to='/'
          className={cn('link', {
            'link_light': theme === 'light',
            'link_dark': theme === 'dark',
          })}
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}

export { RegistrationForm }