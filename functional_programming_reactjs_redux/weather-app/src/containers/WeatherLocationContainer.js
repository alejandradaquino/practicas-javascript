import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setCity } from "../actions";
import WeatherLocation from "../components/WeatherLocation";

const mapDispatchToProps = (dispatch) => ({
  setCity: (value) => dispatch(setCity(value)),
});

class WeatherLocationContainer extends Component {
  render() {
    return (
      <WeatherLocation
        weather={this.props.weather}//(this.props.city)}
        city={this.props.city}
        setCity={this.props.setCity}
      ></WeatherLocation>
    );
  }
}
WeatherLocationContainer.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  weather: PropTypes.object,
};

export default connect(
  null,
  mapDispatchToProps
)(WeatherLocationContainer);
