import HTag from './HTag';
import { useEffect, useState } from 'react';
import weatherService from '../services/weatherService';

const convertToCelsius = tempK => (tempK - 273.15).toFixed(2);

const DisplayCountryInfo = ({countryInfo}) => {

  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    weatherService
      .getWeather(countryInfo.capitalInfo.latlng[0], countryInfo.capitalInfo.latlng[1])
      .then(weather => setWeatherInfo(weather));
  }, [])

  return (
    <div className="country-info">
      <HTag textContent={countryInfo.name.common} level={2}/>
      <br />
      <p>capital: {countryInfo.capital}</p>
      <p>area: {countryInfo.area}km<sup>2</sup></p>
      <br />
      <p className='bold'>languages:</p>
      <ul>
        {Object.values(countryInfo.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
      <HTag textContent={`Weather in ${countryInfo.capital}`} level={2}/>
      {weatherInfo === null 
        ? <></> 
        : <><p>temperature {convertToCelsius(weatherInfo.main.temp)} Celsius</p>
      <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt={`${weatherInfo.weather.description}`} />
      <p>wind {weatherInfo.wind.speed} m/s</p></>}
    </div>
  )
}

const DisplaySearchResults = ({countryArray}) => {
  if (countryArray === null) return null;

  const [showArray, setShowArray] = useState(new Array(countryArray.length).fill(false));

  const toggleShowArray = (i) => {
    let newShowArray = [...showArray];
    newShowArray[i] = !newShowArray[i];
    setShowArray(newShowArray);
  }
  
  if (countryArray.length === 0) {
    return <p>No countries found</p>
  } else if (countryArray.length > 10) {
    return <p>Too many matches. Please provide a more specific search term.</p>
  } else if (countryArray.length > 1 && countryArray.length <= 10) {
    let i = 0;
    return (
      <ul>
        {countryArray.map((country, index) => 
          <li key={country.ccn3}>
            {country.name.common} 
            <button onClick={() => toggleShowArray(index)}>{showArray[index] ? 'hide' : 'show'}</button>
            {showArray[index] ? <DisplayCountryInfo countryInfo={countryArray[index]}/> : <></>}
          </li>)}
      </ul>
      )
  } else {
    return <DisplayCountryInfo countryInfo={countryArray[0]} />
  }
}

export default DisplaySearchResults