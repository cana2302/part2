export const ComponentCountryInfo = ({ indexFilter, paisFiltrado}) => {

  if (indexFilter<10 && indexFilter>1){
    return (
      <ul>
      {paisFiltrado.map( eachCountry => 
        <li key={eachCountry.nombre}>Country name:&nbsp;{eachCountry.nombre}</li>
      )}
      </ul>
    )
  } if (indexFilter===1) {

    //Obtener objeto con lenguajes
    const idioma = paisFiltrado.map(lengua => ({
      lenguage: lengua.languages
    }));
    //Obtener los valores del obejto y devolver un array
    const idioma4 = Object.values(idioma[0].lenguage);

    return (
      <div>
        
        {paisFiltrado.map(eachCountry => 
          <h2>{eachCountry.nombre}</h2>
        )}
        
        {paisFiltrado.map(eachCountry => 
          <p>Capital:&nbsp;{eachCountry.capital}</p>
        )}
        
        {paisFiltrado.map(eachCountry => 
          <p>Area:&nbsp;{eachCountry.area}</p>
        )}

        <p><strong>Languages:</strong></p>
        <ul>
          {Object.values(idioma4).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>

        {paisFiltrado.map(eachCountry => 
            <img src={eachCountry.imagen} alt='flag' />
        )}

      </div>
    )

  } if (indexFilter>10) {
    return(
      <p>Too many matches, specify another filter</p>
    )
  } else {
    return(
      <p>Loading...</p>
    )
  }
};
