import PropTypes from 'prop-types';
import { MdContactPhone } from 'react-icons/md'; //витягуємо іконку для контакту с бібліотеки

import { ContactWrapper, ContactData } from './Contact.styled';

export const Contact = ({ name, number }) => {
  return (
    <ContactWrapper>
      <MdContactPhone size={24} />
      <ContactData>{`${name}: ${number}`}</ContactData>
    </ContactWrapper>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
