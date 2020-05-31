import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import WeatherLocationList from "../components/weatherLocationList";

class WeatherLocationListContainer extends Component {
  render() {
    return (
      <WeatherLocationList
        cities={this.props.cities}
      ></WeatherLocationList>
    );
  }
}

WeatherLocationListContainer.propTypes = {
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => state.cities;

export default connect(
  mapStateToProps,
  null
)(WeatherLocationListContainer);
