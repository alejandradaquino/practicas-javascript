import { combineReducers } from "redux";
import { city } from "./city";
import { cities, getForecastData as _getForecastData } from "./cities";

export default combineReducers({
  city,
  cities,
});

export const getCurrentCity = (state) => state.city;

export const getForecastData = (state) => _getForecastData(state.cities, getCurrentCity(state));
