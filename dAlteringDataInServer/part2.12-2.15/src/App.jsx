import { useState, useEffect } from 'react';
import axios from 'axios'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter'

const App = () => {

  // Hooks:
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('put a new name...');
  const [newNumber, setNewNumber] = useState('put a number...');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const checkName = persons.find(person => person.name === newName);
    if (checkName) {
      alert(`${newName} is already added to phonebook`);
    } else {
      // newName dosent exist in persons, so add to hook persons
      const personObject = { name: newName, number: newNumber};
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
 
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const filteredPersons = persons.filter(person => {
    const personName = person.name.toLowerCase();
    const filter = newFilter.toLowerCase();
    return (
      personName.includes(filter)
    );
  })

  return (
    <div>

      <h2>Phonebook</h2>
      
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} />

    </div>
  )
}

export default App