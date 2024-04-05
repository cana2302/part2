const Countries = (props) => {

  return (
    <ul>
      {props.countries.map(country =>
        <li key={country}>
          Country name:&nbsp;{country}
        </li>
        )}
    </ul>

  )
}

export default Countries