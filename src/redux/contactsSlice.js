import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = { contact: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contact.push(action.payload);
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
      state.contact.filter(({ id }) => id !== action.payload.id);
    },
  },
});

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);