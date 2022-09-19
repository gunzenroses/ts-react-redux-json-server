import { createSlice } from "@reduxjs/toolkit";
import { getContacts } from "../thunks/contactsThunk";

const localContacts = window.sessionStorage.getItem('contacts');

const initialState: string[] = localContacts? JSON.parse(localContacts) : [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getContacts.rejected, () => {
        return [];
      })
    
  }
})

export default contactSlice.reducer;