
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { contactsFilter } from './contacts/filter.slice';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';






const persistConfig = {
    key: 'phonebook',
    storage,
   
};




const persistedReducer = persistReducer(persistConfig, contactsReducer)
export const store = configureStore({
    devTools: true,
    reducer: {
        contacts: persistedReducer,
        filter: contactsFilter,
    } ,

     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    });
   

export const persistor = persistStore(store);

