import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },

  reducers: {
    deleteContactsAction: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload
      );
    },
    addContactsAction: (state, { payload }) => {
      const newContact = {
        id: nanoid(),
        ...payload,
      };
      state.contacts.some(({ name }) => name === payload.name)
        ? alert(`${newContact.name} is already in contacts.`)
        : state.contacts.push(newContact);
    },
  },
});

export const { deleteContactsAction, addContactsAction } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;