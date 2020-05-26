import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import { CircularProgress } from "@material-ui/core";
//const days = ["lunes", "martes", "miercoles", "jueves", "viernes"];
//const data = {
// temperature: 22,
//  weatherState: "sun",
//  humidity: 80,
//  wind: "22 m/s",
//};

//const data = null;
class ExtendedWeather extends Component {
  constructor() {
    super();
    this.state = { forecastData: null };
  }

  componentDidMount() {
    const days = ["lunes", "martes", "miercoles", "jueves", "viernes"];
    const forecastData = {
      days: days.map((d, index) => {
        return {
          name: d,
          data: {
            temperature: 22 + index,
            weatherState: "sun",
            humidity: 80 - index,
            wind: "22 m/s",
          },
        };
      }),
    };
    setTimeout(() => {
      this.setState({ forecastData });
    }, 2000);
  }

  forecastItems = () => {
    const { forecastData } = this.state;
    const { days } = forecastData;
    return days.map((d) => (
      <ForecastItem
        key={d.name}
        day={d.name}
        hour="22:33"
        data={d.data}
      ></ForecastItem>
    ));
  };

  getForecastItems = () => {
    const { forecastData } = this.state;
    if (forecastData != null) {
      return this.forecastItems();
    } else {
      return (
        <div>
          <CircularProgress size={60} style={{ margin: "4px" }} />
        </div>
      );
    }
  };

  render() {
    const { city } = this.props;
    return (
      <div className={"ExtendedWeather"}>
        <h3>Pronostico extendido para {city}</h3>
        {this.getForecastItems()}
      </div>
    );
  }
}
ExtendedWeather.propTypes = {
  city: PropTypes.string,
};

export default ExtendedWeather;
