import { combineReducers } from "redux";
import { city } from "./city";
import { createSelector } from "reselect";
import { cities, getForecastData as _getForecastData } from "./cities";

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
