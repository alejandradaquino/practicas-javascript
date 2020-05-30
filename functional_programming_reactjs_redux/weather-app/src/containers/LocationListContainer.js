import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "../actions";
import WeatherLocationList from "../components/weatherLocationList";

class LocationListContainer extends Component {

  updateSelectedLocation = location => {
    console.log(location);
    this.props.setCity(location);
  };

  render() {
    return (
      <WeatherLocationList
        cities={this.props.cities}
        onLocationClicked={this.updateSelectedLocation}
      ></WeatherLocationList>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCity: (value) => dispatch(setCity(value)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
