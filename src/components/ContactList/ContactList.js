import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          />
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};
