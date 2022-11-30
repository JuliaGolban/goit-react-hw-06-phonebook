import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const AppState = {
  contacts: [],
  filter: '',
};

const appSlice = createSlice({
  name: 'contacts',
  initialState: AppState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(({ id }) => id === action.payload);
      state.contacts.splice(index, 1);
      // return state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
  version: 1,
};

export const { addContact, deleteContact, filterContacts } = appSlice.actions;

export const persistedReducer = persistReducer(
  contactsPersistConfig,
  appSlice.reducer
);
