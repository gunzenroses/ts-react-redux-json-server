import { createSlice } from "@reduxjs/toolkit";

const initialState: string = window.sessionStorage.getItem('theme') || 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      window.sessionStorage.setItem('theme', action.payload);
      return action.payload;
    }
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;