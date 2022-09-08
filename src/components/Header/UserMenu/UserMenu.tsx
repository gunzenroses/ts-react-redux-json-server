import { FC } from 'react';

import { Button, CustomLink } from 'components';

import styles from './UserMenu.module.scss';

type Props = {
  isAuth: boolean;
  theme: string;
};

const UserMenu: FC<Props> = ({ 
  isAuth,
  theme
}) => {
  
  return (
    <div className={styles.container}>
      {isAuth ? (
        <>
          <CustomLink text='Contacts' theme={theme} />
          <Button text='Sign out' theme={theme} href='./sign-out' type='link'/>
        </>
      ) : (
        <>
          <Button
            text='Registration'
            theme={theme}
            href='./registration'
            type='link'
          />
          <Button 
            text='Sign in' 
            theme={theme} 
            href='/' 
            type='link' 
          />
        </>
      )}
    </div>
  );
}

export { UserMenu }