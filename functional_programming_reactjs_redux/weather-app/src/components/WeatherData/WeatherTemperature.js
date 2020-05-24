import React from "react";
import WeatherIcons from "./WeatherIcons";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WIND } from "../../../constants/Weathers";
import PropTypes from "prop-types";

const icons = {
  [CLOUD]: "fa-cloud",
  [CLOUDY]: "fa-cloud-upload",
  [SUN]: "fa-sun-o",
  [RAIN]: "fa-tint",
  [SNOW]: "fa-snowflake-o",
  [WIND]: "fa-align-center"
};

const getWeatherIcon = state => {
  const icon = icons[state];
  return icon ? (
    <WeatherIcons name={icon}></WeatherIcons>
  ) : (
    <WeatherIcons name={icons.fog}></WeatherIcons>
  );
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    {`${temperature} Grados centigrados`}
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};
export default WeatherTemperature;
