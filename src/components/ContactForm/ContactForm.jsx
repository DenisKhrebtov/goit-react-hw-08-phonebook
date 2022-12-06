import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';

import {
  AddForm,
  AddLabel,
  InputName,
  InputNumber,
  AddBtn,
} from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = form.elements;
    contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    )
      ? alert(`${name.value} is already in contacts`)
      : dispatch(addContact({ name: name.value, phone: number.value }));

    form.reset();
  };

  return (
    <AddForm onSubmit={handleSubmit}>
      <AddLabel>
        Name
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </AddLabel>
      <AddLabel>
        Number
        <InputNumber
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </AddLabel>
      <AddBtn type="submit">Add contact</AddBtn>
    </AddForm>
  );
}
