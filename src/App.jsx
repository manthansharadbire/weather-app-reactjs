import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
const API_KEY = "d91f5c11b2249b0b7ebd03046c64d6ee"
const [city, setCity] = useState("New Delhi");
const [weather, setWeather] = useState({
  temp:null,
  feelsLike:null,
  windSpeed:null,
  pollutionIndex:null,
  humidity:null,
});

const getWeatherData = ()=>{};

useEffect(()=>{
  getWeatherData();
},[city])

  return (
  <div>
  <div className='flex justify-center mt-8'>
  <input
  type="text"
  value={city}
  placeholder="Tap to enter your city here"
  className='border 
 border-blue-400 
  py-4 pl-5 outline-none 
  w-[300px] sm:w-[400px] 
  md:w-[600px] lg:w-[900px]
  rounded-3xl
 shadow-lg text-start
 text-xl'
 onChange={(e)=>{
  setCity(e.target.value)
 }}/>
  <button
  type='button'
  className='border 
  py-4 px-6 bg-blue-400 
  ml-3 border-blue-400
 text-white
 hover:bg-blue-600
 rounded-3xl
 shadow-lg'>
  Search
  </button>
  </div>

  <div className='text-center mt-9'>
  <h1 className='text-5xl'>
  {city}
  </h1>
  <h2 className='text-9xl mt-2'>45°C</h2>
  <h4></h4>
  </div>
<div className='flex-col'>
  <span className='block border border-gray-300 py-4 text-center m-6 text-xl font-semibold  rounded-3xl
 shadow-lg'>Feels like : {weather.feelsLike} 48°C</span>
  <span className='block  border-gray-300 py-4 text-center border m-6 text-xl font-semibold  rounded-3xl
 shadow-lg'>Wind Speed : {weather.windSpeed} 12km/hour</span>
  <span className='block  border-gray-300 py-4 text-center border m-6 text-xl font-semibold  rounded-3xl
 shadow-lg'>Pollution Index : {weather.pollutionIndex} 80 AQI</span>
  <span className='block  border-gray-300 py-4 text-center border m-6 text-xl font-semibold rounded-3xl
 shadow-lg'>Humidity : {weather.humidity} 13%</span>
</div>
  </div>
  );
}

export default App;
