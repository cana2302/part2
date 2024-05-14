export const InfoCountryShow = ({ paisFiltrado }) => {

  return (
    <div>
      <h2>{paisFiltrado.nombre}</h2>
      <p>Capital:&nbsp;{paisFiltrado.capital}</p>
      <p>Area:&nbsp;{paisFiltrado.area}</p>
      <p><strong>Languages:</strong></p>
      <ul>
        {Object.entries(paisFiltrado.languages).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
      <br/>
      <img src={paisFiltrado.imagen} alt='flag' />
    </div>
  )
}

