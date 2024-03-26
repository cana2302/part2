import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ { name: 'Arto Hellas' } ]); 
  const [newName, setNewName] = useState('put a new name...');

  const addName = (event) => {
    event.preventDefault()
    const personObjet = {
      name: newName
    }
    setPersons(persons.concat(personObjet))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
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
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person =>
        <p>{person.name}</p>
        )}
    </div>
  )
}

export default App