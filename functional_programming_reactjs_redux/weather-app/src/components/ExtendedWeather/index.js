import React from "react";
import PropTypes from "prop-types";

const ExtendedWeather = ({ location }) => <div>{location}</div>;

ExtendedWeather.propTypes = {
  location: PropTypes.string,
};

export default ExtendedWeather;
