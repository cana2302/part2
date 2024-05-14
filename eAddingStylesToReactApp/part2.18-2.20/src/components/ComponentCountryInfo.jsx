import {InfoCountryShow} from './InfoCountryShow.jsx';
import { useState } from 'react';

export const ComponentCountryInfo = ({ indexFilter, paisFiltrado}) => {

  const [show, setShow] = useState([false,'']);

  if (indexFilter<10 && indexFilter>1){

    return (
      <>
        <ul>
          {paisFiltrado.map(eachCountry => (

            <li key={eachCountry.nombre}>
              Country name:&nbsp;{eachCountry.nombre}
              <button onClick={()=>{
                setShow([(!(show[0])),(eachCountry.nombre)]);
                console.log(show);
              }}>show</button>
              {(show[0]) && ((eachCountry.nombre)===(show[1])) ? <InfoCountryShow paisFiltrado={eachCountry} /> : null} 
            </li>
          ))}          
        </ul>
      </>
    )

  } if (indexFilter===1) {
    return (
      <div>
        {paisFiltrado.map(eachCountry => (
          <InfoCountryShow key={eachCountry.nombre} paisFiltrado={eachCountry} />
         ))}
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
