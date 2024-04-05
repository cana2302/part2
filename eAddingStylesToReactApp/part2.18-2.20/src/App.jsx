import { useState, useEffect } from 'react';
import countryService from './services/countries.js';
import Countries from './components/Countries.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [newFilter, setNewFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        const commonNames = countries.map(country => country.name.common);
        console.log(commonNames);
        setCountries(commonNames);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log(newFilter);
  };

  const filteredCountries = countries.filter(country => {
    const countryName = country .toLowerCase();
    const filter = newFilter.toLowerCase();
    return (
      countryName.includes(filter)
    );
  });

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      <Countries countries={filteredCountries} />
    </div>
  )
}

export default App;