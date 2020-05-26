import React, { Component } from "react";
import "./App.css";
import WeatherLocationList from "./components/weatherLocationList";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ExtendedWeather from "./components/ExtendedWeather";
import { Grid, Col, Row } from "react-flexbox-grid";
const cities = [
  "Buenos Aires, ar",
  "London",
  "Bogota, col",
  "Mexico, mex",
  "Washington",
  "Madrid, es",
];
class App extends Component {
  constructor() {
    super();
    this.state = { location: "Seleccione una location" };
  }
  updateSelectedLocation = (location) => {
    console.log(location);
    this.setState({ location });
  };

  render() {
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}  className='WeatherLocationListCont'>
            <WeatherLocationList
              cities={cities}
              onLocationClicked={this.updateSelectedLocation}
            ></WeatherLocationList>
          </Col>
          <Col xs={12} md={6}>
            <ExtendedWeather location={this.state.location}></ExtendedWeather>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
