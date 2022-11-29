import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { List, Item } from './List.styled';
import IconBtn from 'components/buttons/IconBtn/IconBtn';
import { ReactComponent as DeleteIcon } from '../Icons/close.svg';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };
  const visibleContacts = getVisibleContacts();

  const dispatch = useDispatch();
  const deleteThisContact = id => dispatch(deleteContact(id));

  return (
    <List>
      {visibleContacts.length === 0 && <Item>No contacts</Item>}
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <IconBtn
              aria-label="Delete contact"
              onClick={() => deleteThisContact(id)}
            >
              <DeleteIcon width="10" heigth="10" />
            </IconBtn>
          </Item>
        );
      })}
    </List>
  );
};
