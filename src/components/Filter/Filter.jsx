import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/appSlice';
import { FieldFilter, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => dispatch(filterContacts(e.target.value));

  const filter = useSelector(getFilter);
  return (
    <FieldFilter>
      <LabelFilter>Find contacts by name</LabelFilter>
      <InputFilter
        type="text"
        name="filter"
        title="Name may contain only letters"
        value={filter}
        onChange={handleFilterChange}
      />
    </FieldFilter>
  );
};