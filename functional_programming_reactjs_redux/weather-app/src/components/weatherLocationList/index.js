import React from "react";
import { PropTypes } from "prop-types";
import WeatherLocationContainer from "../../containers/WeatherLocationContainer";

const WeatherLocationList = ({ cities, citiesNames }) => {
  return (
    <div>
      {citiesNames.map((c) => (
        <WeatherLocationContainer
          key={c}
          city={c}
          weather={cities[c] && cities[c].weather}
        ></WeatherLocationContainer>
      ))}
    </div>
  );
};

WeatherLocationList.propTypes = {
  cities: PropTypes.object.isRequired,
  citiesNames: PropTypes.array.isRequired,
};
export default WeatherLocationList;
