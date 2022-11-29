import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { List, Item } from './List.styled';
import IconBtn from 'components/buttons/IconBtn/IconBtn';
import { ReactComponent as DeleteIcon } from '../Icons/close.svg';

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const deleteThisContact = id => dispatch(deleteContact(id));

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <IconBtn
              aria-label="Delete contact"
              onClick={deleteThisContact(id)}
            >
              <DeleteIcon width="10" heigth="10" />
            </IconBtn>
          </Item>
        );
      })}
    </List>
  );
};
