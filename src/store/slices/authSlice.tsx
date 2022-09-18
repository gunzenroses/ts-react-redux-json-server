import { createSlice } from "@reduxjs/toolkit";
import { copyFile } from "fs";

import { createUser, authUser, deleteUser } from '../thunks/usersThunk';

const initialState = {
  id: '',
  email: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    removeUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
      })
      .addCase(createUser.rejected, (state) => {
        state.id = ''; 
        state.email = '';
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
      })
      .addCase(authUser.rejected, (state) => {
        state.id = '';
        state.email = '';
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.id = '';
        state.email = '';
      })
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;