import React, { Component } from "react";
import WeatherData from "./WeatherData";
import PropTypes from 'prop-types';
import Location from "./Location";
import { CircularProgress } from "@material-ui/core";
import { WeatherService } from "../../services/WeatherService";
import "./styles.css";

class WeatherLocation extends Component {
  weatherService;
  constructor(props) {
    super(props);
    const {city} = props;
    this.weatherService = new WeatherService();
    this.state = {
      city,
      data: null
    };;
  }
  componentDidMount() {
    this.handleUpdateClick();
  }
  componentDidUpdate(prevProps, prevState) {}

  handleUpdateClick = () => {
    this.weatherService
      .getWeatherData(this.state.city)
      .subscribe((weather) => {
        this.setState(weather);
      });
  };

  getWeatherData = (data) => {
    if (data != null) {
      return <WeatherData data={data}></WeatherData>;
    } else {
      return (
        <div>
          <CircularProgress size={60} style={{ margin: "4px" }} />
        </div>
      );
    }
  };

  render() {
    const { city, data } = this.state;
    const { onWeatherLocationClicked} = this.props;
    return (
      <div className="weatherLocationCont"  onClick={onWeatherLocationClicked}>
        <Location city={city}></Location>
        {this.getWeatherData(data)}
      </div>
    );
  }
}

WeatherLocation.propTypes ={
  city: PropTypes.string.isRequired,
  onWeatherLocationClicked: PropTypes.func,
}

export default WeatherLocation;
