import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

import {
  Backdrop,
  CloseButton,
  Modal,
  EditorForm,
  EditLabel,
  InputName,
  InputNumber,
  EditBtn,
} from './ContactEditor.styled';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';

export const ContactEditor = ({ onClose, id, oldName, oldNumber }) => {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editContact({ id, name, number }));
    onClose();
  };

  return (
    <Backdrop>
      <Modal>
        <CloseButton type="button" onClick={onClose}>
          <AiOutlineCloseCircle />
        </CloseButton>
        <EditorForm onSubmit={handleSubmit}>
          <EditLabel>
            Name
            <InputName
              onChange={e => {
                setName(e.currentTarget.value);
              }}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
            />
          </EditLabel>
          <EditLabel>
            Number
            <InputNumber
              onChange={e => {
                setNumber(e.currentTarget.value);
              }}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
            />
          </EditLabel>
          <EditBtn type="submit">Edit contact</EditBtn>
        </EditorForm>
      </Modal>
    </Backdrop>
  );
};
