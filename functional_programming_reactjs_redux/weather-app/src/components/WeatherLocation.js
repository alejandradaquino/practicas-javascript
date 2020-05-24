import React from "react";
import WeatherData from "./WeatherData/";
import Location from "./Location";

const WeatherLocation = () => (
  <div>
    Weather Location
    <Location city={"Buenos Aires Nuevo"}></Location>
    <WeatherData></WeatherData>
  </div>
);

export default WeatherLocation;
