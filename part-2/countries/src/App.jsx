import { useEffect, useState } from 'react';
import TextualInputDefault from './components/TextualInputDefault';
import DisplaySearchResults from './components/DisplaySearchResults';
import countriesService from './services/countriesService';

function App() {

  const [country, setCountry] = useState('');
  const [countryArray, setCountryArray] = useState(null);

  useEffect(() => {
    countriesService.getCountrySearchResults(country)
      .then(countries => {
        setCountryArray(countries)
      });
  }, [country])

  return (
    <>
      <TextualInputDefault label={'find countries'} type={'search'} nameID={'country'} state={country} setter={setCountry}/>
      <DisplaySearchResults key={country} countryArray={countryArray}/>
    </>
  )
}

export default App
