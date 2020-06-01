import React from "react";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import Location from "./Location";
import { CircularProgress } from "@material-ui/core";
import "./styles.css";

const getWeatherData = (weather) => {
  if (weather != null) {
    return <WeatherData data={weather}></WeatherData>;
  } else {
    return (
      <div>
        <CircularProgress size={60} style={{ margin: "4px" }} />
      </div>
    );
  }
};
const WeatherLocation = ({ city, setCity, weather }) => (
  <div className="weatherLocationCont" style={{cursor: 'pointer'}} onClick={() => setCity(city)}>
    <Location city={city}></Location>
    {getWeatherData(weather)}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func,
  weather: PropTypes.object,
};

export default WeatherLocation;
