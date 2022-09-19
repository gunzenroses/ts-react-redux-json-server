import classNames from 'classnames/bind';
import { TextInfo } from 'components';
import { useEffect } from 'react';
import { getContacts } from 'src/store/thunks/contactsThunk';
import { useAuth, useContacts, useMyDispatch, useStore, useTheme } from 'src/store/utils/hooks';

import styles from './Contacts.module.scss';

const cn = classNames.bind(styles);

const Contacts = () => {
  const dispatch = useMyDispatch();
  const theme: string = useTheme();
  const auth: AuthInfo = useAuth();
  const myContacts: string[] = useContacts();

  const myStore = useStore();
  console.log(myStore);

  const mySession = window.sessionStorage;
  console.log(mySession);

  useEffect(() => {
    dispatch(getContacts(auth));
  }, [dispatch, auth]);

  return (
    <div className={
      cn('container', {
        'container_light': theme === 'light',
        'container_dark': theme === 'dark',
      })
    }>
      {
        auth.id ?
        myContacts.map((contact) => {
          return (
            <span>
              {contact}
            </span>
          )
        })
        : <TextInfo text='To check contacts you need to sign in first'/>
      }
    </div>
  )
};

export { Contacts };