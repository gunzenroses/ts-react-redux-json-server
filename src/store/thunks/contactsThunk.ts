import { createAsyncThunk } from "@reduxjs/toolkit";
import Contacts from 'src/api/contactsApi';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async(data: AuthInfo, { rejectWithValue }) => {
    if (!data.id) {
      window.sessionStorage.setItem('contacts', '');
      return rejectWithValue('You\'re not authorized');
    } else {
      const contacts = await new Contacts().getContacts(data);
      window.sessionStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
    }
  }
);

export { getContacts }