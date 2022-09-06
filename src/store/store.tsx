import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './slices/themeSlice';

const MyStore = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export { MyStore };