import { createAsyncThunk } from "@reduxjs/toolkit";
import Contacts from 'src/api/apiContacts';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async(id: string, { rejectWithValue }) => {
    if (!id) {
      window.sessionStorage.setItem('contacts', '');
      return rejectWithValue('You\'re not authorized');
    } else {
      const contacts = await new Contacts().getContacts(id);
      window.sessionStorage.setItem('contacts', JSON.stringify(contacts));
      return contacts;
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (data: { id: string; contactName: string }, { rejectWithValue }) => {
    const { id, contactName } = data;
    if (id && contactName) {
      const newContacts = await new Contacts().deleteContact(data);
      window.sessionStorage.setItem('contacts', JSON.stringify(newContacts));
      return newContacts;
    } else if (!id) {
      return rejectWithValue("You're not authorized");
    } else if (!contactName) {
      return rejectWithValue('You did not chose the contact to delete');
    }
  }
);

export { getContacts, deleteContact };