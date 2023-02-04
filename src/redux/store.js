
import { contactsInitState } from './contacts/contacts.init-state';
// import { contactsReducer } from './contacts/contacts.reducer';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.slice';
import { persistStore, persistReducer } from 'redux-persist';
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



const initState = {
    contacts: contactsInitState,    
     
}


const persistConfig = {
  key: 'phonebook',
    storage,
  blacklist: ['filter'],
}


const rootReducer = combineReducers({
    contacts: contactsReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
   
    preloadedState: initState,
    devTools: true,
    reducer: {
      contacts:  persistReducer(persistConfig, contactsReducer) ,
    },


     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    });
   

export const persistor = persistStore(store)