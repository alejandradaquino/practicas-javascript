import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import { CircularProgress } from "@material-ui/core";

class ExtendedWeather extends Component {
  componentDidUpdate() {
    this.refresh();
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    if (this.props.forecastData === null) {
      this.props.getExtendedWeather(this.props.city);
    }
  };

  forecastItems = () => {
    const { forecastData } = this.props;
    return forecastData.map((d) => (
      <ForecastItem
        key={d.name + d.hour}
        day={d.name}
        hour={d.hour}
        data={d.data}
      ></ForecastItem>
    ));
  };

  getForecastItems = () => {
    const { forecastData } = this.props;
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
