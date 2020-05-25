import React, { Component } from "react";
import "./App.css";
import WeatherLocationList from "./components/weatherLocationList";
import ExtendedWeather from "./components/ExtendedWeather";

const cities = [
  "Buenos Aires, ar",
  "London",
  "Bogota, col",
  "Mexico, mex",
  "Washington",
  "Madrid, es",
];
class App extends Component {

  constructor(){
    super();
    this.state = {location: 'Seleccione una location'};
  }
  updateSelectedLocation = (location) => {
    console.log(location);
    this.setState({ location });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <WeatherLocationList
            cities={cities}
            onLocationClicked={this.updateSelectedLocation}
          ></WeatherLocationList>
        </div>
        <div style={{ flex: 1 }}>
          <ExtendedWeather location={this.state.location}></ExtendedWeather>
        </div>
      </div>
    );
  }
}

export default App;
