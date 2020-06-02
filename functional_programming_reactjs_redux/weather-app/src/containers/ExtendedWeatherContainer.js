import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ExtendedWeather from "../components/ExtendedWeather";
import { getExtendedWeather } from "../actions";
import { getForecastData, getCurrentCity } from "../reducers";

const mapStateToProps = (state) => {
  return {
    city: getCurrentCity(state),
    forecastData: getForecastData(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getExtendedWeather: (payload) => dispatch(getExtendedWeather(payload)),
});

class ExtendedWeatherContainer extends Component {
  componentDidUpdate() {
    this.refresh();
  }

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    if (this.props.city && !this.props.forecastData) {
      this.props.getExtendedWeather(this.props.city);
    }
  };

  render() {
    return (
      this.props.city && (
        <ExtendedWeather
          city={this.props.city}
          forecastData={this.props.forecastData}
          getExtendedWeather={this.props.getExtendedWeather}
        ></ExtendedWeather>
      )
    );
  }
}

ExtendedWeatherContainer.propsType = {
  city: PropTypes.string,
  getExtendedWeather: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtendedWeatherContainer);
