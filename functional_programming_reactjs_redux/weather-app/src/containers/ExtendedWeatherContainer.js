import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ExtendedWeather from "../components/ExtendedWeather";

const mapStateToProps = ({ city }) => ({ city });

class ExtendedWeatherContainer extends Component {
  render() {
    return (
      this.props.city && (
        <ExtendedWeather city={this.props.city}></ExtendedWeather>
      )
    );
  }
}

ExtendedWeatherContainer.propsType = {
  city: PropTypes.string,
};

export default connect(mapStateToProps)(ExtendedWeatherContainer);
