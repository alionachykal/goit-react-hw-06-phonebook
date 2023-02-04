import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        contactsFilterAction: (_, { payload }) => {
           state.filter =payload; 
        },
        deleteContactsAction: (state, { payload }) => {
              state.contacts = state.contacts.filter(contact => contact.id !== payload)
        },
        addContactsAction:  (state, { payload }) => {
       state.contacts =payload
            
        },
    },
});


export const contactsReducer = contactsSlice.reducer;
export const { contactsFilterAction, deleteContactsAction, addContactsAction } = contactsSlice.actions;