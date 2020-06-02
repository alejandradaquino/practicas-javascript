import React, { Component } from "react";
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


class ExtendedWeatherContainer extends Component {

  render() {
    return (
      this.props.city && (
        <ExtendedWeather
          city={this.props.city}
          forecastData={this.props.forecastData}
        ></ExtendedWeather>
      )
    );
  }
}

ExtendedWeatherContainer.propsType = {
  city: PropTypes.string,
};

export default connect(
  mapStateToProps,
  null
)(ExtendedWeatherContainer);
