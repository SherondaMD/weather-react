import React from "react";

export default function City(props) {
  let cityDetails = {
    city: "",
    date: "",
    time: "",
    weather: "",
  };

  return (
    <div className="overview">
      <h1>{cityDetails.city}</h1>
      <ul>
        <li>
          <span>
            {cityDetails.date}, {cityDetails.time}
          </span>
        </li>
        <li>{cityDetails.weather}</li>
      </ul>
    </div>
  );
}
