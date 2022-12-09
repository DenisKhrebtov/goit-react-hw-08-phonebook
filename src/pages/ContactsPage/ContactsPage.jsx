import { Wrapper, Title } from './ContactsPage.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Message } from 'components/Message/Message';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectIsLoading } from 'redux/contacts/contactSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && <Message text={'Loading, pls wait...'} />}
      <ContactList />
    </Wrapper>
  );
};

export default ContactsPage;
