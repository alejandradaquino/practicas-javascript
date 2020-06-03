import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ExtendedWeather from "../components/ExtendedWeather";
import { getForecastData, getCurrentCity } from "../reducers";

const mapStateToProps = (state) => {
  return {
    city: getCurrentCity(state),
    forecastData: getForecastData(state),
  };
};

const ExtendedWeatherContainer = ({ city, forecastData }) =>
  city && (
    <ExtendedWeather city={city} forecastData={forecastData}></ExtendedWeather>
  );

ExtendedWeatherContainer.propsType = {
  city: PropTypes.string,
};

export default connect(mapStateToProps, null)(ExtendedWeatherContainer);
