import React from "react";
import PropTypes from "prop-types";
import WeatherData from "../WeatherLocation/WeatherData";

const ForecastItem = ({ day, hour, data }) => (
  <div>
    <h4>{day}, Hora: {hour}</h4>  
    <WeatherData
      data={data}
    ></WeatherData>
  </div>
);

ForecastItem.propTypes = {
    day: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }).isRequired,
};

export default ForecastItem;
