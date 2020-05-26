import React from "react";
import PropTypes from "prop-types";
import './styles.css';

const ExtendedWeather = ({ location }) => <div className={'ExtendedWeatherCont'}>{location}</div>;

ExtendedWeather.propTypes = {
  location: PropTypes.string,
};

export default ExtendedWeather;
