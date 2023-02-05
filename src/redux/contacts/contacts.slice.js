import { createSlice } from '@reduxjs/toolkit';



const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
      
    },

    reducers: {
       
        deleteContactsAction: (state, { payload }) => {
              state.contacts = state.contacts.filter(contact => contact.id !== payload)
        },
        addContactsAction:  (state, { payload }) => {
            state.contacts.push(payload);
            
        },
    },
});



export const { deleteContactsAction, addContactsAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;