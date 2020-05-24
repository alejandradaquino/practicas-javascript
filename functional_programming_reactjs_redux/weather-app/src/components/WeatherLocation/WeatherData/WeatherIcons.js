import React from "react";

const WeatherIcons = ({ name, size }) => {
  return (
    <i
      className={`fa ${name}`}
      aria-hidden="true"
      style={{ fontSize: size,  color: '#333' }}
    ></i>
  );
};

export default WeatherIcons;
