import React, { Component } from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ExtendedWeatherContainer from "./containers/ExtendedWeatherContainer";
import { Grid, Col, Row } from "react-flexbox-grid";
import WeatherLocationListContainer from "./containers/WeatherLocationListContainer";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h1" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6} className="WeatherLocationListCont">
            <WeatherLocationListContainer></WeatherLocationListContainer>
          </Col>
          <Col xs={12} md={6} className={"ExtendedWeatherCont"}>
            <Paper>
              <ExtendedWeatherContainer ></ExtendedWeatherContainer>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
