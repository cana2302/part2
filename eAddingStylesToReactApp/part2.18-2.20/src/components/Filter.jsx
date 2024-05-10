export const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <>
      <p>
        Find countries: 
        <span> 
          <input value={newFilter} onChange={handleFilterChange} />
        </span>
      </p>
    </>
  )
}