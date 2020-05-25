import React from "react";

const WeatherIcons = ({ className, name, size }) => {
  return (
      <i
        className={`fa ${name} ${className}`}
        aria-hidden="true"
        style={{ fontSize: size }}
      ></i>
  );
};

export default WeatherIcons;
