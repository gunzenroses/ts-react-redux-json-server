import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { MyState, MyDispatch } from './types';

export const useMyDispatch = () => useDispatch<MyDispatch>();

export const useMySelector: TypedUseSelectorHook<MyState> = useSelector;

export const useTheme = () => {
  const theme = useMySelector((state: MyState) => state.theme);
  return theme;
}