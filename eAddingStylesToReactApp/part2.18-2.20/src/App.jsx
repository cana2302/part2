import { useState, useEffect } from 'react';
import countryService from './services/countries.js';
import {ComponentCountryInfo} from './components/ComponentCountryInfo.jsx';
import {Filter} from './components/Filter.jsx';

function App() {
  const [newFilter, setNewFilter] = useState('');
  const [pais, setPais] = useState([]);

  useEffect(() => {
    countryService.getAll()
      .then(data => {

        // Obtener array de objetos (info de paises)
        const infoPais = data.map(pais => ({
          nombre: pais.name.common,
          capital: pais.capital,
          area: pais.area,
          languages: pais.languages,
          imagen: pais.flags.png
        }));

        console.log(infoPais);
        //Guardar el array de objetos en el useState 'pais'
        setPais(infoPais);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  //Actualizar el useState 'newFilter' con los cambios del input
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  //Guarda un array de objetos, paises con nombre que coincidan con el filtro
  const paisFiltrado = pais.filter(pais => 
    pais.nombre.toLowerCase().includes(newFilter.toLowerCase())
  );

  console.log(paisFiltrado);
  console.log(`paisFiltrado.length es: ${paisFiltrado.length}`);

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>

      <ComponentCountryInfo indexFilter={paisFiltrado.length} paisFiltrado={paisFiltrado} />
    </div>
  )
}

export default App;