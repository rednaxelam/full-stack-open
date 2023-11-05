import axios from 'axios';
const weather_api_key = import.meta.env.VITE_WEATHER_KEY;

const getWeather = (lat, lon) => {
  return axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}`)
    .then(response => response.data);
}

export default {getWeather}