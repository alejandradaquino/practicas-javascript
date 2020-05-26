import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class ExtendedWeather extends Component {
  render() {
    return (<div>Pronostico extendido para {this.props.location}</div>);
  }
}
ExtendedWeather.propTypes = {
  location: PropTypes.string,
};

export default ExtendedWeather;
