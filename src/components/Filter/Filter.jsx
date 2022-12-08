import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/contactSelectors';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <Wrapper>
      <Label>
        Find contacts by name
        <Input name="filter" type="filter" value={filter} onChange={onChange} />
      </Label>
    </Wrapper>
  );
};
