import { SignInForm } from 'components';
import { useTheme } from 'src/store/utils/hooks';

import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';

const cn = classNames.bind(styles);

const SignIn = () => {
  const theme: string = useTheme();

  const handleSubmit = ({ email, password }: { email: string, password: string}) => {
    
  }

  return (
    <div className={cn(
      'container',
      {
        'container_dark': theme === 'dark',
        'container_light': theme === 'light'
      }
    )}>
      <SignInForm theme={theme}/>
    </div>
  );
}

export { SignIn }