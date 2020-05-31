import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { setCity, loadWeather } from "../actions";
import WeatherLocation from "../components/WeatherLocation";
import { getWeather } from "../reducers";

const mapStateToProps = (state) => ({
  weather: (city) => getWeather(state, city),
});

const mapDispatchToProps = (dispatch) => ({
  setCity: (value) => dispatch(setCity(value)),
  loadWeather: (value) => dispatch(loadWeather(value)),
});

class WeatherLocationContainer extends Component {
  render() {
    return (
      <WeatherLocation
        weather={this.props.weather(this.props.city)}
        city={this.props.city}
        setCity={this.props.setCity}
        loadWeather={this.props.loadWeather}
      ></WeatherLocation>
    );
  }
}
WeatherLocationContainer.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  loadWeather: PropTypes.func.isRequired,
  weather: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherLocationContainer);
