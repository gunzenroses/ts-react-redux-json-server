import { RegistrationForm } from "components/RegistrationForm/RegistrationForm"
import { useTheme } from "src/store/utils/hooks"
import classNames from "classnames/bind";

import styles from './Registration.module.scss';

const cn = classNames.bind(styles);

const Registration = () => {
  const theme: string = useTheme();

  return (
    <div className={cn('container', {
      'container_light': theme === 'light',
      'container_dark': theme === 'dark'
    })}>
      <RegistrationForm theme={ theme }/>
    </div>
  )
}

export { Registration }