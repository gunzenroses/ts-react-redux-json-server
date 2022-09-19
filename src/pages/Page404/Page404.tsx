import classNames from 'classnames/bind';

import { useTheme } from 'src/store/utils/hooks';
import { TextInfo } from 'components';

import styles from './Page404.module.scss';

const cn = classNames.bind(styles);

const Page404 = () => {
  const theme: string = useTheme();

  return (
    <div className={cn('container', {
      'container_light': theme === 'light',
      'container_dark': theme === 'dark'
    })}>
      <TextInfo text='Oops, there is no such page' />
    </div>
  )
};

export { Page404 };