import { createReducer } from '@reduxjs/toolkit';
import { contactsInitState } from './contacts.init-state';
import { addContactsAction,  deleteContactsAction, contactsFilterAction } from './contactsActions';



// export const contactsReducer = (state = contactsInitState, {type, playload}) => {
//     switch (type) {
//         case 'FILTER':
//             return { ...state, filter: playload };
        
//         case 'DELETE':
//             return {...state, contacts: state.contacts.filter(contact =>contact.id !== playload) }
//         default:
//             return state;
//     }
   
// }
// export const contactsReducer = createReducer(contactsInitState, builder => {
//     builder.addCase(contactsFilterAction, (_, { payload }) => {
//         state.filter =payload;
//     })
//         .addCase(deleteContactsAction, (state, { payload }) => {
//             state.contacts = state.contacts.filter(contact => contact.id !== payload)
//         })
//         .addCase(addContactsAction, (state, { payload }) => {
//         return state
            
//         })
    

// });
          
