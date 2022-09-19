import { RegistrationForm } from "components/RegistrationForm/RegistrationForm"
import { useAuth, useTheme } from "src/store/utils/hooks"
import classNames from "classnames/bind";

import styles from './Registration.module.scss';
import { TextInfo } from "components";

const cn = classNames.bind(styles);

const Registration = () => {
  const theme: string = useTheme();
  const isAuth: boolean = !!useAuth().id;

  return (
    <div className={cn('container', {
      'container_light': theme === 'light',
      'container_dark': theme === 'dark'
    })}>
      {
        isAuth 
        ? <TextInfo text={'You\'ve already registered'}></TextInfo>
        : <RegistrationForm theme={ theme }/>
      }
    </div>
  )
}

export { Registration }