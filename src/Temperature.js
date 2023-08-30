import React from "react";

export default function Temperature(props) {
  let tempDetails = {
    temperature: "101",
    units: "°F",
  };

  return (
    <div className="col-sm-6">
      <div className="d-flex weather-temperature">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" //!--{cityDetails.imgUrl}--
          alt="Sunny" //!--{cityDetails.description}--
        ></img>
        <strong>{tempDetails.temperature}</strong>
        <span className="units">{tempDetails.units}</span>
      </div>
    </div>
  );
}
