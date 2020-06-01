import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadWeather } from "../actions";
import WeatherLocationList from "../components/weatherLocationList";

class WeatherLocationListContainer extends Component {
  componentDidMount() {
    console.log(this.props.cities);
    Object.keys(this.props.cities).forEach((city) => {
      this.props.loadWeather(city);
    });
  }

  render() {
    return (
      <WeatherLocationList cities={this.props.cities}></WeatherLocationList>
    );
  }
}

WeatherLocationListContainer.propTypes = {
  cities: PropTypes.object.isRequired,
  loadWeather: PropTypes.func.isRequired,
};

const mapDispatchoProps = (dispatch) => ({
  loadWeather: (city) => dispatch(loadWeather(city)),
});

const mapStateToProps = (state) => ({
  cities: state.cities,
});

export default connect(
  mapStateToProps,
  mapDispatchoProps
)(WeatherLocationListContainer);
