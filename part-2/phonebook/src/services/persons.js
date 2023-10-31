import axios from 'axios';
const baseURL = 'http://localhost:3001/persons';

const createContact = newContact => {
  return axios.post(baseURL, newContact).then(response => response.data);
}

export default {createContact};