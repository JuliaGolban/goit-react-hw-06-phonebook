import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

const rootPersistConfig = {
  key: 'phonebook',
  storage,
  whitelist: ['contacts'],
  version: 1,
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
