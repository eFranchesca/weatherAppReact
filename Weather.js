import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Fort Lauderdale",
    temperature: 60,
    date: "Friday 9:45pm",
    humidity: 86,
    wind: 0
  };
  return (
    <div className="Weather">
      <form class="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter city here"
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>

      <div className="row">
        <div className="col-6">
          <li className="city">{weatherData.city}</li>
          <li>{weatherData.date}</li>
          <span className="cityTemp">{weatherData.temperature}°F</span>
          <li className="condition">🌙</li>
        </div>

        <div className="col-6 mt-4">
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Feels like: 60°</li>
          <span>Wind speed: {weatherData.wind} mph</span>
        </div>
      </div>

      <div className="weather-forecast"></div>
    </div>
  );
}
