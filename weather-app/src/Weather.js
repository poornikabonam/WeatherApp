import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [error, setError] = useState(null);
  const [infoVisible, setInfoVisible] = useState(false);

  const apiKey = '4306d794d7f4a40bc90419a5cb90a575'; // Replace with your OpenWeatherMap API key

  const getWeatherData = async () => {
    try {
      // Fetch current weather data
      const currentWeatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setCurrentWeather(currentWeatherResponse.data);

      // Fetch 5-day forecast data
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
      const dailyForecast = forecastResponse.data.list.filter(reading => reading.dt_txt.includes("12:00:00"));
      setForecast(dailyForecast);

      setSelectedDay(null); // Reset selected day when new city is searched
      setError(null); // Reset any previous errors
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
      console.error(err);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
  };

  return (
    <div className="weather-container">
      <h1>Weather App By Poornika Bonam</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Enter city" 
          value={city} 
          onChange={handleCityChange} 
        />
        <button onClick={getWeatherData}>Get Weather</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {currentWeather && (
        <div className="current-weather-box">
          <h2>Today's Weather in {currentWeather.name}</h2>
          <div className="current-weather-details">
            <img 
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`} 
              alt={currentWeather.weather[0].description} 
            />
            <div>
              <p>{Math.round(currentWeather.main.temp)}°C</p>
              <p>{currentWeather.weather[0].description}</p>
              <p>Humidity: {currentWeather.main.humidity}%</p>
              <p>Wind: {currentWeather.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast-container">
          <h2>5-Day Forecast</h2>
          <div className="forecast-grid">
            {forecast.map((day, index) => (
              <div 
                className={`forecast-card ${selectedDay === day ? 'selected' : ''}`} 
                key={index} 
                onClick={() => handleDayClick(day)}
              >
                <p className="date">{new Date(day.dt_txt).toLocaleDateString()}</p>
                <img 
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                  alt={day.weather[0].description} 
                />
                <p className="temperature">{Math.round(day.main.temp)}°C</p>
                <p className="description">{day.weather[0].description}</p>
              </div>
            ))}
          </div>

          {selectedDay && (
            <div className="selected-day-details">
              <h3>Weather Details for {new Date(selectedDay.dt_txt).toLocaleDateString()}</h3>
              <p>Temperature: {Math.round(selectedDay.main.temp)}°C</p>
              <p>Weather: {selectedDay.weather[0].description}</p>
              <p>Humidity: {selectedDay.main.humidity}%</p>
              <p>Wind: {selectedDay.wind.speed} m/s</p>
            </div>
          )}
        </div>
      )}

      {/* Info Button and Description */}
      <button className="info-button" onClick={toggleInfo}>
        {infoVisible ? 'Hide Info' : 'Show Info'}
      </button>
      {infoVisible && (
        <div className="info-section">
          <h2>About the Product Manager Accelerator Program</h2>
          <p>
            The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.
          </p>
          <p>
            Our Product Manager Accelerator community is ambitious and committed. Through our program, they have learned, honed, and developed new PM and leadership skills, giving them a strong foundation for their future endeavors.
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
