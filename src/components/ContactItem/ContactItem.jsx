import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

import {
  ContactName,
  ContactNumber,
  DeleteButton,
  Item,
} from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <ContactName>
        {name}: <ContactNumber>{number}</ContactNumber>
      </ContactName>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
