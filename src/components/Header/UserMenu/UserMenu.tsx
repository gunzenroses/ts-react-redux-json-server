import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth, useMyDispatch } from 'src/store/utils/hooks';
import { signOut } from 'src/store/thunks/usersThunk';
import { Button, CustomLink } from 'components';

import styles from './UserMenu.module.scss';

type Props = {
  theme: string;
};

const UserMenu: FC<Props> = ({
  theme
}) => {
  const UserInfo: UserInfo = useAuth();
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  const onPointerUp = () => {
    const storageData = window.sessionStorage.getItem('UserInfo');
    const data = storageData ? JSON.parse(storageData) : {};
    dispatch(signOut(data))
    .then(() => {
      alert('You have successfully logged out!')
    })
    .then(() => {
      navigate('/');
    });
  };
  
  return (
    <div className={styles.container}>
      {UserInfo.id ? (
        <>
          <CustomLink text='Contacts' theme={theme} />
          <Button
            text='Sign out'
            theme={theme}
            type='button'
            onPointerUp={onPointerUp}
          />
        </>
      ) : (
        <>
          <Button
            text='Registration'
            theme={theme}
            href='/registration'
            type='button'
          />
          <Button 
            text='Sign in' 
            theme={theme} 
            href='/sign-in'
            type='button'
          />
        </>
      )}
    </div>
  );
}

export { UserMenu }