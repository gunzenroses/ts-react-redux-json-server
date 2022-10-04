import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import classNames from 'classnames/bind';

import { Button, CustomErrorMessage } from 'components';

import styles from './SignInForm.module.scss';
import { useMyDispatch } from 'src/store/utils/hooks';
import { authUser } from 'src/store/thunks/usersThunk';
import { ErrorMessage } from '@hookform/error-message';


const cn = classNames.bind(styles);

type Props = {
  theme: string;
};

const SignInForm: FC<Props> = ({ theme }) => {

  const navigate = useNavigate();
  const dispatch = useMyDispatch();

  const { register, handleSubmit, formState: { errors }, resetField } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data: FieldValues) => {
    const email = data.email.trim().toLowerCase();
    const updData = {
      email: email,
      password: data.password
    }

    dispatch(authUser(updData))
    .then((response) => {
      if (response.meta.requestStatus === 'rejected') {
        alert(response.payload);
      } else {
        alert("Congratulations! You've successfully logged in!");
        navigate('/', { replace: true });
      }
    })
    .then(() => {
      resetField('email');
      resetField('password');
    })
    .catch((error) => {
      alert(error.message);
    });
  };


  return (
    <form
      autoComplete='off'
      className={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1
        className={cn('title', {
          title_light: theme === 'light',
          title_dark: theme === 'dark',
        })}
      >
        Sign in
      </h1>
      <p
        className={cn('subtitle', {
          subtitle_light: theme === 'light',
          subtitle_dark: theme === 'dark',
        })}
      >
        Start managing your contacts
      </p>
      <input
        {...register('email', {
          required: 'Email is required',
        })}
        type='email'
        placeholder='Email'
        className={styles.input}
        autoComplete='new-password'
      />
      <ErrorMessage
        errors={errors}
        name='email'
        render={({ message }) => (
          <CustomErrorMessage theme={theme} message={message} />
        )}
      />
      <input
        {...register('password', {
          required: 'Password is required',
        })}
        type='password'
        placeholder='Password'
        className={styles.input}
        autoComplete='new-password'
      />
      <ErrorMessage
        errors={errors}
        name='password'
        render={({ message }) => (
          <CustomErrorMessage theme={theme} message={message} />
        )}
      />
      <Button type='submit' theme='light' text='Login' />
      <Link
        to='./registration'
        className={cn('link', {
          link_light: theme === 'light',
          link_dark: theme === 'dark',
        })}
      >
        Registration
      </Link>
    </form>
  );
}

export { SignInForm }