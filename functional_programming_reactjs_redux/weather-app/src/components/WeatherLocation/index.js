import React, { Component } from "react";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import Location from "./Location";
import { CircularProgress } from "@material-ui/core";
import "./styles.css";

class WeatherLocation extends Component {
  componentDidMount() {
    this.props.loadWeather(this.props.city);
  }

  getWeatherData = (weather) => {
    if (weather != null) {
      return <WeatherData data={weather}></WeatherData>;
    } else {
      return (
        <div>
          <CircularProgress size={60} style={{ margin: "4px" }} />
        </div>
      );
    }
  };

  render() {
    const { city, setCity } = this.props;
    return (
      <div className="weatherLocationCont" onClick={() => setCity(city)}>
        <Location city={city}></Location>
        {this.getWeatherData(this.props.weather)}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func,
  loadWeather: PropTypes.func.isRequired,
  weather: PropTypes.object,
};

export default WeatherLocation;
