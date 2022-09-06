import React, { ChangeEvent, FormEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Button, Input } from 'components';

import styles from './SignInForm.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
  handleOnSubmit: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
};

const SignInForm: FC<Props> = ({ theme, handleOnSubmit }) => {
  console.log(styles.title_light);

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleOnSubmit({ email, password });
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h1 className={
        cn(
          'title',
          {
            'title_light': theme === 'light',
            'title_dark': theme === 'dark'
          })
      }>Sign in</h1>
      <p className={
        cn(
          'subtitle',
          {
            'subtitle_light': theme === 'light',
            'subtitle_dark': theme === 'dark'
          }
        )
      }>Start managing your contacts</p>
      <Input 
        name="email" 
        type="email" 
        placeholder='Email' 
        value={email} 
        onChange={handleEmail}
      />
      <Input 
        name='password' 
        type='password' 
        placeholder='Password'
        value={password} 
        onChange={handlePassword} 
      />
      <Button type='submit' theme='light' text='Login' />
      <Link to='./registration' className={
        cn('link', {
          'link_light': theme === 'light',
          'link_dark': theme === 'dark'
        })}>Registration</Link>
    </form>
  )
}

export { SignInForm }