import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personService from './services/persons';
import Notification from './components/Notification';


const App = () => {

  // Hooks:
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('put a new name...');
  const [newNumber, setNewNumber] = useState('put a number...');
  const [newFilter, setNewFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const checkName = persons.find(person => person.name === newName);

    if (checkName) {
      const answer = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);

      if (answer){
        const checkId = checkName.id;
        const updatedPerson = { ...checkName, number: newNumber };
        
        //axios.put
        personService
        .updateNumber(checkId,updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id === checkId ? returnedPerson : person));
            setNewName('');
            setNewNumber('');

            setErrorMessage(`The new number for '${newName}' was update!`);
            setTimeout(() => {setErrorMessage(null)}, 5000);
          })
      } else {
        return;
      }
    } else {
      // newName dosent exist at persons, so add to state persons
      const personObject = { name: newName, number: newNumber};
     
      personService
      .create(personObject)
        .then(returnedPerson => {
          setPersons([...persons,returnedPerson]);
          setNewName('');
          setNewNumber('');
      
          setErrorMessage(`Added '${newName}'`);
          setTimeout(() => {setErrorMessage(null)}, 5000);

        })
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

  const handleDelete = (person_id,person_name) => {
    if (window.confirm(`Delete ${person_name}?`)) {
      personService._delete(person_id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== person_id));
        })
    }
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />

    </div>
  )
}

export default App