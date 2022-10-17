import PropTypes from 'prop-types';
import {DeleteButton, Text} from './ContactListItem.styled'

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <Text>{name} - {number}</Text>
      <DeleteButton type="button" onClick={() => deleteContact(id)}>
        Delete Contact
      </DeleteButton>
    </>
  )
}

ContactListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
}