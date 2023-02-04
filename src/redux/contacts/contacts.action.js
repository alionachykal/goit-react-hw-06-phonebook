// export const contactsFilterAction = playload => ({ type: 'FILTER', playload });

import { createAction } from "@reduxjs/toolkit";
import { ADD, DELETE, FILTER } from './contactsTypes';

// export const deleteContactsAction = playload => ({ type: 'DELETE' , playload });
export const contactsFilterAction = createAction(FILTER);
export const deleteContactsAction = createAction(DELETE);
export const addContactsAction = createAction(ADD);