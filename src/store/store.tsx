import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';
import themeSlice from './slices/themeSlice';

const MyStore = configureStore({
  reducer: {
    theme: themeSlice,
    isAuth: authSlice
  },
});

export { MyStore };