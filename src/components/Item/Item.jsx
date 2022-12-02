import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import IconBtn from 'components/buttons/IconBtn/IconBtn';
import { ReactComponent as DeleteIcon } from '../Icons/close.svg';
import { Item } from './Item.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item key={id}>
      {name}: {number}
      <IconBtn aria-label="Delete contact" onClick={handleDelete}>
        <DeleteIcon width="10" heigth="10" />
      </IconBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
