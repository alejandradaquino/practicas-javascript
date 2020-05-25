import React from "react";
import WeatherIcons from "./WeatherIcons";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "../../../constants/Weathers";
import PropTypes from "prop-types";
import "./styles.css";

const icons = {
  [CLOUD]: "fa-cloud",
  [SUN]: "fa-sun-o",
  [RAIN]: "fa-tint",
  [SNOW]: "fa-snowflake-o",
  [THUNDER]: "fa-bolt",
  [DRIZZLE]: "fa-shower"
};

const weatherIcon = state => {
  const icon = icons[state];
  const sizeIcon = "40px";
  return icon ? (
    <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>
  ) : (
    <WeatherIcons
      className="wicon"
      name={icons.fog}
      size={sizeIcon}
    ></WeatherIcons>
  );
};

const WeatherTemperature = ({ temperature, weatherState }) => {
  return (
    <div className="wWeatherTemperatureCont">
      {weatherIcon(weatherState)}
      <span className="temperature">{temperature}</span>
      <span className="temperatureType"> Cº</span>
    </div>
  );
};

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};
export default WeatherTemperature;
