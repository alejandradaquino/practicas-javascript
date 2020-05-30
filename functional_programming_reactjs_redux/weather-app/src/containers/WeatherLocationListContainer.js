import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "../actions";
import WeatherLocationList from "../components/weatherLocationList";

class WeatherLocationListContainer extends Component {
  render() {
    return (
      <WeatherLocationList
        cities={this.props.cities}
        onLocationClicked={(location) => this.props.setCity(location)}
      ></WeatherLocationList>
    );
  }
}

WeatherLocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCity: value => dispatch(setCity(value)),
});

export default connect(null, mapDispatchToProps)(WeatherLocationListContainer);
