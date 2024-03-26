import { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter'

const App = () => {

  // Hooks:
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('put a new name...');
  const [newNumber, setNewNumber] = useState('put a number...');
  const [newFilter, setNewFilter] = useState('');

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