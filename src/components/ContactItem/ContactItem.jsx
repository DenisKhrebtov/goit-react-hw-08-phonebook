import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  ContactName,
  EditButton,
  ContactNumber,
  DeleteButton,
  Item,
} from './ContactItem.styled';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';

export const ContactItem = ({ id, name, number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setIsOpen(!isOpen);
  return (
    <Item>
      <ContactName>
        {name}: <ContactNumber>{number}</ContactNumber>
      </ContactName>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
      <EditButton type="button" onClick={openModal}>
        Edit
      </EditButton>
      {isOpen && (
        <ContactEditor
          onClose={openModal}
          id={id}
          oldName={name}
          oldNumber={number}
        />
      )}
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
