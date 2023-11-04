import HTag from './HTag';

const DisplayCountryInfo = ({countryInfo}) => {
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
    </div>
  )
}

const DisplaySearchResults = ({countryArray}) => {
  if (countryArray === null) return null;
  
  if (countryArray.length === 0) {
    return <p>No countries found</p>
  } else if (countryArray.length > 10) {
    return <p>Too many matches. Please provide a more specific search term.</p>
  } else if (countryArray.length > 1 && countryArray.length <= 10) {
    return (
      <ul>
        {countryArray.map(country => <li key={country.ccn3}>{country.name.common}</li>)}
      </ul>
      )
  } else {
    return <DisplayCountryInfo countryInfo={countryArray[0]} />
  }
}

export default DisplaySearchResults