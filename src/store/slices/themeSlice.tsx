import { createSlice } from "@reduxjs/toolkit";
import type { MyState } from '../utils/types';

const initialState: Theme = 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;