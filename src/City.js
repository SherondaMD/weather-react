import React from "react";

export default function City(props) {
  let cityDetails = {
    city: "Las Vegas",
    date: "August 22nd",
    time: "17:53 pm",
    weather: "Clear Sky",
  };

  return (
    <div className="overview">
      <h1>{cityDetails.city}</h1>
      <ul>
        <li>
          Last updated:{" "}
          <span>
            {cityDetails.date}, {cityDetails.time}
          </span>
        </li>
        <li>{cityDetails.weather}</li>
      </ul>
    </div>
  );
}
