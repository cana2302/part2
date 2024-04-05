import { useState, useEffect } from 'react';
import countryService from './services/countries.js';
import Countries from './components/Countries.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [newFilter, setNewFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService
      .getAll(newFilter)
      .then(countries => {
        setCountries(countries)
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, [newFilter]);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    console.log(newFilter);
  };

  const filteredCountries = countries.filter(country => {
    const countryName = country.name.toLowerCase();
    const filter = newFilter.toLowerCase();
    return (
      countryName.includes(filter)
    );
  });

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />

      <Countries name={filteredCountries}/>
    </div>
  )
}

export default App;