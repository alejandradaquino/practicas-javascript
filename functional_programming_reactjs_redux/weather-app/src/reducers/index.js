import { combineReducers } from "redux";
import { city } from "./city";
import { createSelector } from "reselect";
import {
  cities,
  getForecastData as _getForecastData,
  getCitiesNames as _getCitiesNames,
  getCitiesWeather as _getCitiesWeather,
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

export const getCitiesWeather = createSelector((state) => state.cities, _getCitiesWeather);

export const getCitiesNames = createSelector(
  (state) => state.cities,
  _getCitiesNames
);
