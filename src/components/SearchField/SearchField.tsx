import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { useAuth, useMyDispatch } from 'src/store/utils/hooks';
import { addContact, findContacts } from 'src/store/thunks/contactsThunk';

import { SearchItem } from './SearchItem/SearchItem';
import styles from './SearchField.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
};

const SearchField: FC<Props> = ({ theme }) => {
  const dispatch = useMyDispatch();
  const { id } = useAuth();

  const component = useRef(null);

  const [text, setText] = useState('');

  const [contacts, setContacts] = useState<UserOpenInfo[]>([]);

  useEffect(() => {
    const handleFoundContacts = (e: PointerEvent) => {
      const isInArea = e.composedPath().some((targetParent) => targetParent === component.current);
      if (!isInArea) setContacts([]);
    };

    document.addEventListener('pointerdown', handleFoundContacts);

    return(() => {
      document.removeEventListener('pointerdown', handleFoundContacts);
    })
  }, [])

  const onSearchHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (text === '') {
      setContacts([]);
      return;
    }
    dispatch(findContacts({ id: id, email: text }))
      .then((response) => {
        if (response.meta.requestStatus === 'rejected' && response.payload) {
          alert(response.payload);
          setText('');
        } else {
          const listOfContacts = response.payload as UserOpenInfo[];
          setContacts(listOfContacts);
        }
      });
  };

  const addContactHandler = (index: number) => {
    const contactEmail = contacts[index].email;
    dispatch(addContact({ userId: id, emailOfNewContact: contactEmail }))
    .then((response) => {
      if (response.meta.requestStatus === 'rejected') {
        alert(response.payload);
      }
    })
    .then(() => {
      setText('');
      setContacts([]);
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputText = e.target.value;
    setText(inputText);
  };

  return (
    <form
      
      autoComplete='off'
      onSubmit={onSearchHandler}
      className={cn('container', {
        container_light: theme === 'light',
        container_dark: theme === 'dark',
      })}
    >
      <button type='submit' className={cn('button')} />
      <input
        onChange={onChangeHandler}
        value={text}
        className={cn('field', {
          field_light: theme === 'light',
          field_dark: theme === 'dark',
        })}
      />
      <div className={styles.autocomplete} ref={component}>
        {
          contacts.map((contact, index) => {
            return (
              <SearchItem
                email={contact.email}
                key={String(index)}
                index={index}
                onClick={addContactHandler}
              />
            );
          })
        }
      </div>
    </form>
  );
};

export { SearchField };
