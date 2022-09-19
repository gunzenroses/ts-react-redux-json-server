import { configureStore } from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import contactsSlice from './slices/contactsSlice';
import themeSlice from './slices/themeSlice';

const MyStore = configureStore({
  reducer: {
    theme: themeSlice,
    user: userSlice,
    contacts: contactsSlice
  },
});

export { MyStore };