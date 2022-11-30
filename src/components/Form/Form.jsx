import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/appSlice';
import TextBtn from 'components/buttons/TextBtn/TextBtn.styled';
import { Form, Field, Label, Input } from './Form.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const contactId = nanoid(4);
    const name = form.elements.name;
    const number = form.elements.number;
    const newContact = {
      id: contactId,
      name: name.value,
      number: number.value,
    };

    const normalizedName = name.value.toLowerCase();
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase() === normalizedName
    );
    if (isExist) {
      return alert(`${newContact.name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={contacts.name}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        <Label>Number</Label>
        <Input
          type="tel"
          name="number"
          value={contacts.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <TextBtn type="submit">Add contact</TextBtn>
    </Form>
  );
};
