import { SignInForm } from 'components';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const handleSubmit = ({ email, password }: { email: string, password: string}) => {
    
  }

  return (
    <div className={styles.container}>
      <SignInForm handleOnSubmit={ handleSubmit } />
    </div>
  );
}

export { SignIn }