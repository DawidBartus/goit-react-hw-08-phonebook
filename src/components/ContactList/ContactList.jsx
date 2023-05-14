import React from 'react';
import style from 'components/ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { selectNumber, selectFilter } from '../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import Filter from 'components/Filter/Filter';

const styleH2 = { color: 'white', margin: '10px' };

const ContactList = props => {
  const { onClick } = props;
  const dispatch = useDispatch();
  const contacts = useSelector(selectNumber);

  const filter = useSelector(selectFilter).value;

  const setFilters = e => {
    const newfilter = e.target.value;
    dispatch(setFilter(newfilter));
  };
  return (
    <>
      {contacts.length > 0 ? (
        <h2 style={styleH2}>Contacts</h2>
      ) : (
        <h2 style={styleH2}>Add someone</h2>
      )}

      {contacts.length > 0 && <Filter onChange={setFilters} />}
      <ul className={style.list}>
        {contacts
          .filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
          })
          .map(contact => {
            return (
              <li className={style.list_element} key={contact.id}>
                <button
                  className={style.delete}
                  id={contact.id}
                  onClick={onClick}
                >
                  Del
                </button>
                <p className={style.contact_details}>
                  {contact.name} {contact.number}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,

  onClick: PropTypes.func,
};

export default ContactList;
