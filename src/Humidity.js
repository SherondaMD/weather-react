import React from "react";

export default function Humidity(props) {
  let weatherDetails = {
    humidity: "",
    wind: "",
  };

  return (
    <div className="col-sm-6">
      <ul>
        <li>
          <span>{weatherDetails.humidity}</span>
        </li>
        <li>
          <span>{weatherDetails.wind}</span>
        </li>
      </ul>
    </div>
  );
}
