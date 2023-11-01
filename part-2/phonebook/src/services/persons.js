import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const createContact = newContact => {
  return axios.post(baseURL, newContact).then(response => response.data);
}

const getAll = () => {
  return axios.get(baseURL).then(response => response.data);
}

const deleteContact = contact => {
  if (window.confirm(`delete ${contact.name}?`)) {
    axios.delete(`${baseURL}/${contact.id}`);
  }
}

export default {createContact, getAll, deleteContact};