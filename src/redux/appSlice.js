import { createSlice, nanoid } from '@reduxjs/toolkit';
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
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(4),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(({ id }) => id === action.payload);
      state.contacts.splice(index, 1);
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
