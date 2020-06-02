import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import { CircularProgress } from "@material-ui/core";

const forecastItems = (forecastData) => {
  return forecastData.map((d) => (
    <ForecastItem
      key={d.name + d.hour}
      day={d.name}
      hour={d.hour}
      data={d.data}
    ></ForecastItem>
  ));
};

const getForecastItems = (forecastData) => {
  if (forecastData != null) {
    return forecastItems(forecastData);
  } else {
    return (
      <div>
        <CircularProgress size={60} style={{ margin: "4px" }} />
      </div>
    );
  }
};

const ExtendedWeather = ({ forecastData, city }) => (
  <div className={"ExtendedWeather"}>
    <h3>Pronostico extendido para {city}</h3>
    {getForecastItems(forecastData)}
  </div>
);

ExtendedWeather.propTypes = {
  city: PropTypes.string,
};

export default ExtendedWeather;
