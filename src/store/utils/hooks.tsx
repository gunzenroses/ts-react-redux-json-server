import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { MyState, MyDispatch } from './types';

export const useMyDispatch = () => useDispatch<MyDispatch>();

export const useMySelector: TypedUseSelectorHook<MyState> = useSelector;

export const useStore = () => {
  const store = useMySelector((state: MyState) => state);
  return store;
}

export const useTheme = () => {
  const theme = useMySelector((state: MyState) => state.theme);
  return theme;
}

export const useAuth = () => {
  const authInfo = useMySelector((state: MyState) => state.user);
  return authInfo;
}

export const useContacts = () => {
  const myContacts = useMySelector((state: MyState) => state.contacts);
  return myContacts;
}