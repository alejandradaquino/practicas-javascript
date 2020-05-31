import React from "react";
import { PropTypes } from "prop-types";
import WeatherLocationContainer from "../../containers/WeatherLocationContainer";

const WeatherLocationList = ({ cities }) => {
  return (
    <div>
      {cities.map((c) => (
        <WeatherLocationContainer key={c} city={c}></WeatherLocationContainer>
      ))}
    </div>
  );
};

WeatherLocationList.propTypes = {
  cities: PropTypes.array.isRequired,
};
export default WeatherLocationList;
