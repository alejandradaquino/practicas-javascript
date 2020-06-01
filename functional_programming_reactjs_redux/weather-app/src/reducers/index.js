import { combineReducers } from "redux";
import { city } from "./city";
import { createSelector } from "reselect";
import {
  cities,
  getForecastData as _getForecastData,
  getWeather as _getWeather,
  getCitiesNames as _getCitiesNames,
} from "./cities";

export default combineReducers({
  city,
  cities,
});

export const getCurrentCity = createSelector(
  (state) => state.city,
  (city) => city
);

export const getForecastData = createSelector(
  (state) => state.cities,
  getCurrentCity,
  _getForecastData
);

export const getWeather = (state, city) => {
  const result = createSelector(
    (state) => state.cities,
    () => city,
    _getWeather
  )(state, city);
  return result;
};

export const getCities = createSelector((state) => state.cities, f=>f);

export const getCitiesNames = createSelector(
  (state) => state.cities,
  _getCitiesNames
);
