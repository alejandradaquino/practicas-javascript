import React, { Component } from "react";
import WeatherData from "./WeatherData";
import Location from "./Location";
import {WeatherService }from '../../services/WeatherService';
import "./styles.css";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WIND } from "../../constants/Weathers";

const data = {
  temperature: 5,
  humidity: 10,
  wind: "3 m/s",
  weatherState: SUN
};

class WeatherLocation extends Component {
  weatherService;
  constructor() {
    super();
    this.weatherService = new WeatherService();
    this.state = {
      city: "Buenos Aires, Arg",
      data: data
    };
  }

  handleUpdateClick = () => {
    this.weatherService.getWeatherData('Buenos Aires, ar').subscribe(weather=>{
      this.setState(weather);
    });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleUpdateClick}
        >
          actualizar
        </button>
      </div>
    );
  }
}

export default WeatherLocation;
