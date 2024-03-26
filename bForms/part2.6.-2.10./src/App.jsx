import { useState } from 'react';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas', number:'040-1234567' } ]); 
  const [newName, setNewName] = useState('put a new name...');
  const [newNumber, setNewNumber] = useState('put a number...');

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

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: 
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: 
          <input value={newNumber} onChange={handleNumberChange} />
        </div>        
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>     
        <Persons key={person.name} name={person.name} number={person.number} />
        )}
      </ul>

    </div>
  )
}

export default App