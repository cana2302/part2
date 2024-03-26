const Persons = (props) => {
  return (
    <ul>
      {props.filteredPersons.map(person =>
        <li key={person.name}>{person.name}&nbsp;{person.number}</li>
      )}
    </ul>
  )
}

export default Persons