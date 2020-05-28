import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import { CircularProgress } from "@material-ui/core";
import { WeatherService } from "../../services/WeatherService";

class ExtendedWeather extends Component {
  weatherService;
  constructor(props) {
    super();
    this.state = { forecastData: null, city: props.city };
    this.weatherService = new WeatherService();
  }

  UNSAFE_componentWillReceiveProps(props) {
    if(this.props.city !== this.state.city){
      this.setState({ forecastData: null });
      this.refresh(props);
    } 
  }
  
  componentDidMount(props){
    this.refresh(this.props);
  }

  refresh = (props) =>{
    this.weatherService
    .getForecastData(props.city)
    .subscribe((forecastData) => {
      this.setState({ forecastData });
    });
  }

  forecastItems = () => {
    const { forecastData } = this.state;
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
