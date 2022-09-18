import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import classNames from 'classnames/bind';

import { Button, CustomErrorMessage } from 'components';

import styles from './RegistrationForm.module.scss';
import { useMyDispatch } from 'src/store/utils/hooks';
import { createUser } from 'src/store/thunks/usersThunk';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
}

const RegistrationForm: FC<Props> = ({ theme }) => {

  const navigate = useNavigate();
  const dispatch = useMyDispatch();

  const { register, handleSubmit, formState: { errors }, resetField } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data: FieldValues) => {
    const email: string = data.email.trim().toLowerCase();
    const password: string = data.password.trim();
    const updData = { email, password };

    dispatch(createUser(updData))
      .then((response) => {
        if (response.meta.requestStatus === 'rejected') {
          alert(response.payload)
        } else {
          alert("Congratulations! You've successfully registered!");
          navigate('/contacts', { replace: true });
        }
      })
      .then(() => {
        resetField('email');
        resetField('password');
      })
      .catch((error) => {
        alert(error.message);
      })
    };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h1
        className={cn('title', {
          title_light: theme === 'light',
          title_dark: theme === 'dark',
        })}
      >
        Registration
      </h1>
      <input
        {...register('email', {
          required: 'Write an email',
          minLength: 6,
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/,
            message: 'Email must be real',
          },
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
          required: 'Write a password',
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            message:
              'Must be at least 8 characters long, has 1 digit, 1 upper case letter, 1 symbol',
          },
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
      <div className={styles.button}>
        <Button type='submit' theme='light' text='Submit' />
      </div>
      <p
        className={cn('subtitle', {
          subtitle_light: theme === 'light',
          subtitle_dark: theme === 'dark',
        })}
      >
        Already have an account?
        <Link
          to='/'
          className={cn('link', {
            link_light: theme === 'light',
            link_dark: theme === 'dark',
          })}
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}

export { RegistrationForm }