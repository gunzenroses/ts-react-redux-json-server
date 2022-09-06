import classNames from "classnames/bind";

import { useTheme } from "src/store/utils/hooks";
import github from 'assets/images/github.png';
import { ButtonIcon } from "components/ButtonIcon/ButtonIcon"

import styles from './Footer.module.scss';


const cn = classNames.bind(styles);

const Footer = () => {
  const theme: string = useTheme();

  return (
    <footer className={cn(
        'container',
        {
          'container_dark': theme === 'dark',
          'container_light': theme === 'light'
        }
      )}>
      <a href='https/github.com' target='_blank' rel="noopener noreferrer" className={styles.link}>
        <ButtonIcon imgSrc={github} />
        <p className={styles.text}>Check out other projects</p>
      </a>
    </footer>
  )
}

export  { Footer }