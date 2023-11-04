import axios from 'axios';
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/';

const getCountrySearchResults = searchTerm => {
  return axios
    .get(`${baseURL}/all`)
    .then(response => response.data.filter(country => country.name.common.toUpperCase().includes(searchTerm.toUpperCase())));
}

export default {getCountrySearchResults};