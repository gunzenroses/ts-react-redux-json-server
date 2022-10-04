import classNames from 'classnames/bind';
import { Contact, SearchField, TextInfo } from 'components';
import { useEffect } from 'react';
import { deleteContact, getContacts } from 'src/store/thunks/contactsThunk';
import { useAuth, useContacts, useMyDispatch, useTheme } from 'src/store/utils/hooks';

import styles from './Contacts.module.scss';

const cn = classNames.bind(styles);

const Contacts = () => {
  const dispatch = useMyDispatch();
  const theme: string = useTheme();
  const { id } = useAuth();
  const myContacts: string[] = useContacts();

  useEffect(() => {
    dispatch(getContacts(id));
  }, [dispatch, id]);

  const onContactDelete = (contactName: string) => {
    dispatch(deleteContact({ 
      id: id, 
      contactName: contactName 
    }));
  };

  return (
    <div className={
      cn('container', {
        'container_light': theme === 'light',
        'container_dark': theme === 'dark',
      })
    }>
      <h2 className={styles.header}>Your contact list</h2>
      { id && 
        <>
          <h3>Search by name</h3>
          <SearchField theme={theme} />
        </>
      }
      {
        id ?
        myContacts.map((contact, index) => {
          return (
            <Contact theme={theme} key={String(index)} onClick={onContactDelete}>
              {contact}
            </Contact>
          )
        })
        : <TextInfo type='secondary' text='To check contacts you need to sign in first'/>
      }
    </div>
  )
};

export { Contacts };