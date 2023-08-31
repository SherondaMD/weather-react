import React from "react";

export default function City(props) {
  let cityDetails = {
    city: "Phoenix",
    date: "August 30th 2023",
    time: "17:53 pm",
    weather: "clear sky",
    temperature: "99 °F",
    humidity: "15 %",
    wind: "3 mph",
    icon: `https://openweathermap.org/img/wn/01d@2x.png`,
  };

  return (
    <div>
      <h1>{cityDetails.city}</h1>
      <span>
        <ul>
          <li>
            Last updated: {cityDetails.date},{cityDetails.time}
          </li>
          <li>Temperature: {cityDetails.temperature}</li>
          <li>Description: {cityDetails.weather}</li>
          <li>Humidity: {cityDetails.humidity}</li>
          <li>Wind: {cityDetails.wind}</li>
          <li>
            <img src={cityDetails.icon} alt={cityDetails.description} />
          </li>
        </ul>
      </span>
    </div>
  );
}
