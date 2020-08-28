import axios from 'axios';
import contactActions from './phonebook-actions'

const fetchContacts = () => dispatch => {
  dispatch(contactActions.getContactsRequest())

  axios.get('/contacts').then(({ data }) => dispatch(contactActions.getContactsSuccess(data))).catch(error => dispatch(contactActions.getContactsError(error)))
}


const addContact = (name, number) => dispatch => {
  const newContact = {
    name: name,
    number: number,
  };

  dispatch(contactActions.addContactRequest())

  axios.post('/contacts', newContact).then(({ data }) => dispatch(contactActions.addContactSuccess(data))).catch(error => dispatch(contactActions.addContactError(error)))
}

const deleteContact = id => dispatch => {
  dispatch(contactActions.deleteContactRequest())

  axios.delete(`/contacts/${id}`).then(() => dispatch(contactActions.deleteContactSuccess(id))).catch(error => dispatch(contactActions.deleteContactError(error)))
}

export default {
  addContact,
  deleteContact,
  fetchContacts
}
