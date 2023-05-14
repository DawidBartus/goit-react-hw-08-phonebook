import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteNumber, fetchContacts } from 'components/redux/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { selectError, selectIsLoading } from 'components/redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const delateNum = e => {
    e.preventDefault();
    dispatch(deleteNumber(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'white' }}>Phonebook</h1>
      <ContactForm />

      {isLoading && !error && (
        <h4 style={{ color: 'white' }}>Loading in progress, please wait...</h4>
      )}
      <ContactList onClick={delateNum} />
    </div>
  );
};
export default Contacts;
