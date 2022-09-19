import { createSlice } from "@reduxjs/toolkit";

import { createUser, signOut, authUser, deleteUser } from '../thunks/usersThunk';

const authInfo = window.sessionStorage.getItem('authInfo');

const initialState = authInfo ? JSON.parse(authInfo) as AuthInfo : { id: '', email: '' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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
      .addCase(signOut.fulfilled, (state) => {
        state.id = '';
        state.email = '';
      })
      .addCase(signOut.rejected, (state) => {
        state.id = '';
        state.email = '';
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.id = '';
        state.email = '';
      });
  },
});

export default userSlice.reducer;