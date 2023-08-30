import React from "react";

export default function Humidity(props) {
  let weatherDetails = {
    humidity: "15%",
    wind: "3 mph",
  };

  return (
    <div className="col-sm-6">
      <ul>
        <li>
          Humidity: <span>{weatherDetails.humidity}</span>
        </li>
        <li>
          Wind: <span>{weatherDetails.wind}</span>
        </li>
      </ul>
    </div>
  );
}
