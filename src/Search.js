import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [update, setUpdate] = useState(false);

  function handleResponse(response) {
    setUpdate(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/10d@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            onChange={changeCity}
            placeholder="Search for a city"
            className="form-control shadow-sm"
            autocomplete="on"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Seach"
            className="btn btn-dark shador-sm w-100"
          />
        </div>
      </div>
    </form>
  );
  if (update) {
    return (
      <div>
        {form}
        <h1>{city}Las Vegas</h1>
        <ul>
          <li>
            <strong>Temperature</strong>:{Math.round(weather.temperature)} °F
          </li>
          <li>
            <strong>Description</strong>:{weather.description}
          </li>
          <li>
            <strong>Humidity</strong>:{weather.humidity} %
          </li>
          <li>
            <strong>Wind</strong>:{Math.round(weather.wind)} mph
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
