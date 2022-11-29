import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addfilterContacts(state, action) {
      state = action.payload.toLowerCase();
    },
  },
});

export const { addfilterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
