import { FC, SyntheticEvent, useState } from 'react';
import classNames from 'classnames/bind';

import { useAuth, useMyDispatch } from 'src/store/utils/hooks';
import { addContact, findContacts } from 'src/store/thunks/contactsThunk';

import styles from './SearchField.module.scss';

const cn = classNames.bind(styles);

type Props = {
  theme: string;
};

const SearchField: FC<Props> = ({ theme }) => {
  const dispatch = useMyDispatch();
  const { id } = useAuth();

  const [text, setText] = useState('');

  const [contact, setContact] = useState([]);

  const onSubmitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(findContacts({ id: id, email: text }))
      .then((response) => {
        if (response.meta.requestStatus === 'rejected' && response.payload) {
          alert(response.payload);
        } else {
          const listOfContacts = response.payload;
          console.log(listOfContacts);
        }
      });
  };

  const addContactHandler = () => {
    dispatch(addContact({ id: id, email: text })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
      }
    });
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputText = e.target.value;
    setText(inputText);
  };

  return (
    <form
      autoComplete='off'
      onSubmit={onSubmitHandler}
      className={cn('container', {
        container_light: theme === 'light',
        container_dark: theme === 'dark',
      })}
    >
      <button type='submit' className={cn('button')} />
      <input
        onChange={onChangeHandler}
        className={cn('field', {
          field_light: theme === 'light',
          field_dark: theme === 'dark',
        })}
      />
      <div className={styles.autocomplete}></div>
    </form>
  );
};

export { SearchField };
