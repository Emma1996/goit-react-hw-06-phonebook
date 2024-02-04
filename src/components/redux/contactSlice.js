import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      if (!Array.isArray(state.contacts)) {
        state.contacts = [];
      }
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, setContacts } =
  contactSlice.actions;

export default contactSlice.reducer;
