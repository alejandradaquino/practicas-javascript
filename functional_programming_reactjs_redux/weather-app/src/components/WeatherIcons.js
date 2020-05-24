import React from "react";



const WeatherIcons = ({name}) => {
    console.log(name);
   return (
  <div>
    <i className={`fa ${name}`} aria-hidden="true" style={{ fontSize: "23px" }}></i>
  </div>
)};

export default WeatherIcons;