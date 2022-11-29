import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { FieldFilter, LabelFilter, InputFilter } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = filter => dispatch(filterContacts(filter));

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
