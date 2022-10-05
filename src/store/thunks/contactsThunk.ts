import { createAsyncThunk } from "@reduxjs/toolkit";
import Contacts from 'src/api/apiContacts';
import ApiUsers from "src/api/apiUsers";

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

const findContacts = createAsyncThunk(
  'contacts/findContacts',
  async(data: {id: string, email: string}, { rejectWithValue }) => {
    const listOfUsers = await new ApiUsers().findUsers(data);
    if (listOfUsers === false) {
      return rejectWithValue('No contact with such email found')
    } else {
      return listOfUsers;
    }
  }
)

const addContact = createAsyncThunk(
  'user/addContact',
  async (
    data: { userId: string; emailOfNewContact: string },
    { rejectWithValue }
  ) => {
    const { userId, emailOfNewContact } = data;
    const newContact = await new ApiUsers().checkEmail(emailOfNewContact);
    if (!!newContact) {
      const newContactName = `${newContact.name} ${newContact.surname}`;
      const userContacts = await new Contacts().getContacts(userId);
      const contactExists = userContacts.find(
        (contact) => contact === newContactName
      );
      if (!!contactExists) {
        return rejectWithValue('Already in a contact list');
      } else {
        const updContacts = await new Contacts().addContact({
          id: userId,
          newContactName: newContactName,
        });
        window.sessionStorage.setItem('contacts', JSON.stringify(updContacts));
        return updContacts;
      }
    }
    return rejectWithValue('No user with such email exists');
  }
);


export { getContacts, deleteContact, findContacts, addContact };