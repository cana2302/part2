import capitalWeather from '../services/weather';
import React, { useEffect, useState } from 'react';

export const Weather = ({ capitalName, coord }) => {

  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  let url = '';
  url = 'http://openweathermap.org/img/w/';
  let iconUrl = '';
  
  useEffect(() => {
    capitalWeather.getWeather(coord)
    .then(data => {
      setWeatherInfo(data);
      setLoading(true);
      })
    .catch(error => {
      console.error('Error fetching countries:', error);
    });
  }, [coord]);

  if(loading){
    console.log('weatherInfo:');
    console.log(weatherInfo);
    iconUrl = url + weatherInfo.weather[0].icon + '.png';
    console.log(iconUrl);
  }

  return (
    <div>
      <h2>Weather in {capitalName}</h2>
      <p>Temperature: {weatherInfo.main?.temp} °C</p>
      <img src={iconUrl} alt='icon'style={{ width: '120px', height: '120px' }}/>
      <p>Wind: {weatherInfo.wind?.speed} m/s</p>
    </div>
  )
}
