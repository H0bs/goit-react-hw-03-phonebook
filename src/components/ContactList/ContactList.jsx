import PropTypes from 'prop-types';
import { ContactListItem } from "../ContactListItem/ContactListItem";
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number}) => (
        <ListItem key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </ListItem>
      ))}
    </List>
  )
}

ContactList.prototype = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
}