import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import TextBtn from 'components/buttons/TextBtn/TextBtn.styled';
import { Form, Field, Label, Input } from './Form.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log('handleSubmit ~ form', form.elements);
    checkExist(form.elements.name.value);
    dispatch(addContact(form.elements.value));
    form.reset();
  };

  const checkExist = value => {
    const normalizedName = value.toLowerCase();
    const isExist = contacts.some(
      ({ name }) => value.toLowerCase() === normalizedName
    );

    if (isExist) {
      return alert(`${value} is already in contacts`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <TextBtn type="submit">Add contact</TextBtn>
    </Form>
  );
};
