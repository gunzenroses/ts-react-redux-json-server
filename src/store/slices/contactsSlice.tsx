import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, findContacts, getContacts } from "../thunks/contactsThunk";

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
      .addCase(deleteContact.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return action.payload;
      })
  }
})

export default contactSlice.reducer;