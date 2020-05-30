import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ExtendedWeather from "../components/ExtendedWeather";
import { getExtendedWeather } from "../actions";

const mapStateToProps = ({ city, previousCity, forecastData }) => ({
  city,
  previousCity,
  forecastData,
});

const mapDispatchToProps = (dispatch) => ({
  getExtendedWeather: (payload) => dispatch(getExtendedWeather(payload)),
});

class ExtendedWeatherContainer extends Component {
  render() {
    return (
      this.props.city && (
        <ExtendedWeather
          city={this.props.city}
          previousCity={this.props.previousCity}
          forecastData={this.props.forecastData}
          getExtendedWeather={this.props.getExtendedWeather}
        ></ExtendedWeather>
      )
    );
  }
}

ExtendedWeatherContainer.propsType = {
  city: PropTypes.string,
  getExtendedWeather: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtendedWeatherContainer);
