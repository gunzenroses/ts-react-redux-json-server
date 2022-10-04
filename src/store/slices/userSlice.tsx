import { createSlice } from "@reduxjs/toolkit";

import { createUser, signOut, authUser, deleteUser } from '../thunks/usersThunk';

const UserInfo = window.sessionStorage.getItem('UserInfo');

const initialState = UserInfo ? JSON.parse(UserInfo) as UserInfo : { id: '', email: '', name: '', surname: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.surname = action.payload.surname;
      })
      .addCase(createUser.rejected, (state) => {
        state.id = '';
        state.email = '';
        state.name = '';
        state.surname = '';
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.surname = action.payload.surname;
      })
      .addCase(authUser.rejected, (state) => {
        state.id = '';
        state.email = '';
        state.name = '';
        state.surname = '';
      })
      .addCase(signOut.fulfilled, (state) => {
        state.id = '';
        state.email = '';
        state.name = '';
        state.surname = '';
      })
      .addCase(signOut.rejected, (state) => {
        state.id = '';
        state.email = '';
        state.name = '';
        state.surname = '';
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.id = '';
        state.email = '';
        state.name = '';
        state.surname = '';
      });
  },
});

export default userSlice.reducer;