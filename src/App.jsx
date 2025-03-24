import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const API_KEY = "d91f5c11b2249b0b7ebd03046c64d6ee";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    feelsLike: null,
    windSpeed: null,
    minTemp: null,
    maxTemp: null,
    humidity: null,
  });

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const weatherData = response.data;

    
      setWeather({
        temp: Math.round(weatherData.main.temp),
        feelsLike: Math.round(weatherData.main.feels_like),
        windSpeed: Math.round(weatherData.wind.speed),
        minTemp: Math.round(weatherData.main.temp_min),
        maxTemp: Math.round(weatherData.main.temp_max),
        humidity: Math.round(weatherData.main.humidity),
      });
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [city]);


  return (
    <div>
      <div className='flex justify-center mt-8'>
        <input
          type="text"
          placeholder="Tap to enter your city here"
          className='border border-blue-400 py-4 pl-5 outline-none w-[300px] sm:w-[400px] md:w-[600px] lg:w-[900px] rounded-3xl shadow-lg text-start text-xl'
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>

      <div className='text-center mt-9'>
        <h1 className='text-5xl'>{city}</h1>
        <h2 className='text-9xl mt-2'> {weather.temp}°C</h2>
      </div>

      <div className='flex-col'>
        <span className='block border border-gray-300 py-4 text-center m-6 text-xl font-semibold rounded-3xl shadow-lg'>
          Feels like: {weather.feelsLike}°C 
        </span>
        <span className='block border-gray-300 py-4 text-center border m-6 text-xl font-semibold rounded-3xl shadow-lg'>
          Wind Speed: {weather.windSpeed}km/h
        </span>
        <span className='block border-gray-300 py-4 text-center border m-6 text-xl font-semibold rounded-3xl shadow-lg'>
          Minimum Temperature: {weather.minTemp}°C
        </span>
        <span className='block border-gray-300 py-4 text-center border m-6 text-xl font-semibold rounded-3xl shadow-lg'>
          Maximum Temperature: {weather.maxTemp}°C
        </span>
        <span className='block border-gray-300 py-4 text-center border m-6 text-xl font-semibold rounded-3xl shadow-lg'>
          Humidity: {weather.humidity}%
        </span>
      </div>
    </div>

  );
}

export default App;
