import React from "react";
import PropTypes from "prop-types";

import WeatherLocation from "../WeatherLocation";

const WeatherLocationList = ({ cities, onLocationClicked }) => {
  return (
    <div>
      {cities.map((c) => (
        <WeatherLocation
          key={c}
          city={c}
          onWeatherLocationClicked={() => onLocationClicked(c)}
        ></WeatherLocation>
      ))}
    </div>
  );
};

WeatherLocation.propTypes = {
  cities: PropTypes.array,
  onLocationClicked: PropTypes.func,
};
export default WeatherLocationList;
