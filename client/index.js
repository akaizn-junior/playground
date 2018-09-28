import React from 'react';
import ReactDOM from 'react-dom';
// components
import WeatherCard from './components/weatherCard/weatherCard';
// style
import './style.scss';

//main

function Main() {
  return (
    <main>
      <WeatherCard latitude="39.7348" longitude="-104.9653" />
      <WeatherCard latitude="37.229564" longitude="-120.047533" />
      <WeatherCard latitude="-8.83333" longitude="13.23333" />
      <WeatherCard latitude="51.5283096" longitude="-0.3810854" />
    </main>
  )
}

// render app
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
