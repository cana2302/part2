const Filter = (props) => {
  return (
    <>
      <p>
        Find countries: 
        <span> 
          <input value={props.newFilter} onChange={props.handleFilterChange} />
        </span>
      </p>
    </>
  )
}

export default Filter