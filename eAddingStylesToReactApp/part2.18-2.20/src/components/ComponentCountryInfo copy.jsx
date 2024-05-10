export const ComponentCountryInfo = ({ indexFilter, countries}) => {

  return (
    <>
      {indexFilter<10 && indexFilter>1 ? (
          <ul>
          {countries.map( eachCountry => <li key={eachCountry}>Country name:&nbsp;{eachCountry}</li>)}
          </ul>
      ) : indexFilter===1 ? (
          <p>index 1, un solo país</p>
      ) : (
          <p>Too many matches, specify another filter</p>
      )}    
    
    </>

  );
};
