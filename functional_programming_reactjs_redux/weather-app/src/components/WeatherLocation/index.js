import React, { Component } from "react";
import WeatherData from "./WeatherData";
import Location from "./Location";
import "./styles.css";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WIND } from "../../constants/Weathers";

const KELVIN_CONSTANT = 273.15;
const data = {
  temperature: 5,
  humidity: 10,
  wind: "3 m/s",
  weatherState: SUN
};
const location = "Buenos Aires, Ar";
const apiKey = "0c74b18247dd98d6fdbe5da1557b29e1";
const urlOpenWeather = "http://api.openweathermap.org/data/2.5/weather";

const apiUrl = (location = "Buenos Aires, Ar") => {
  return `${urlOpenWeather}?q=${location}&APPID=${apiKey}`;
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Buenos Aires, Arg",
      data: data
    };
  }
  kelvinToCelsius = kelvin => {
    return parseFloat((kelvin - KELVIN_CONSTANT).toFixed());
  };
  
  mapState = response => {
    switch (response) {
      case "clouds":
        return CLOUD;
    }
    return WIND;
  };

  convertResponse = json => {
    const { name } = json;
    const { temp, humidity } = json.main;
    const { speed } = json.wind;
    const { main } = json.weather;

    return {
      city: name,
      data: {
        temperature: this.kelvinToCelsius(temp),
        humidity: humidity,
        wind: speed + " m/s",
        weatherState: this.mapState(main)
      }
    };
  };

  handleUpdateClick = () => {
    fetch(apiUrl(location))
      .then(response => response.json())
      .then(json => {
        const newData = this.convertResponse(json);
        this.setState(newData);
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
