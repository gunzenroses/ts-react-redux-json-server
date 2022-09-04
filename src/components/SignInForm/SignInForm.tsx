import React, { ChangeEvent, FormEvent, FC, useState } from 'react';

import { Input } from 'components';

import styles from './SignInForm.module.scss';

type Props = {
  handleOnSubmit: (
    { email, password } : { email: string, password: string }
    ) => void;
}

const SignInForm: FC<Props> = ({ handleOnSubmit }) => {

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
      <Input name="email" type="email" placeholder='Email' value={email} onChange={handleEmail}/>
      <Input name='password' type='password' placeholder='Password' value={password} onChange={handlePassword} />
      <button type="submit"/>
    </form>
  )
}

export { SignInForm }