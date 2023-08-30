import React from "react";

export default function Temperature(props) {
  let tempDetails = {
    temperature: "",
    units: "",
  };

  return (
    <div className="col-sm-6">
      <div className="d-flex weather-temperature">
        <strong>{tempDetails.temperature}</strong>
        <span className="units">{tempDetails.units}</span>
      </div>
    </div>
  );
}
