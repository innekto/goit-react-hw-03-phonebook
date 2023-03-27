import PropTypes from 'prop-types';

import { Contact } from './Contact';

import { ContactsList, ContactsItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <>
      {/* вертаємо динамічну розмітку списку */}
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <div>
                <Contact name={name} number={number} />
              </div>
              {/*при кліку на кнопку рендереться розмітка без компоненту на кнопку якого натиснули */}
              <DeleteButton type="button" onClick={() => deleteContacts(id)}>
                Delete
              </DeleteButton>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export { ContactList };
