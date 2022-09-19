import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiUsers from "src/api/apiUsers";

const createUser = createAsyncThunk(
  'user/createUser',
  async (data: UserInfo, { rejectWithValue }) => {
    const emailExists = await new ApiUsers().checkEmail(data.email);
    if (emailExists) {
      return rejectWithValue('Email already registered! Try another one');
    } else {
      const response = await new ApiUsers().addUser(data);
      window.sessionStorage.setItem('authInfo', JSON.stringify(response));
      return response;
    }
  }
);

const authUser = createAsyncThunk(
  'user/authUser',
  async (data: UserInfo, { rejectWithValue }) => {
    const user = await new ApiUsers().logInUser(data);
    if (user !== undefined) {
      window.sessionStorage.setItem('authInfo', JSON.stringify(user));
      return user;
    } 
    return rejectWithValue('Wrong email or password!');
  }
)

const signOut = createAsyncThunk(
  'user/signOut',
  async (data: AuthInfo, { rejectWithValue }) => {
    if (!data.id) {
      return rejectWithValue('You\'re not logged in');
    };
    window.sessionStorage.removeItem('authInfo');
  }
)

const deleteUser = createAsyncThunk(
  'user/deleteUser', 
  async (userId: string, { rejectWithValue }) => {
    try {
      window.sessionStorage.removeItem('authInfo');
      return await new ApiUsers().deleteUser(userId);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)

export { createUser, signOut, deleteUser, authUser };