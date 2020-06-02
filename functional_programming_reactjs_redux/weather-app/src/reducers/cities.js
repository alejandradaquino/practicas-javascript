import {
  EXTENDED_WEATHER_COMPLETED,
  LOAD_WEATHER_COMPLEATED,
} from "../actions";
import { createSelector } from "reselect";

export const cities = (state = {}, action) => {
  if (action.type === EXTENDED_WEATHER_COMPLETED) {
    const { city, forecastData } = action.payload;
    const cityFull = state[city];
    return { ...state, [city]: { ...cityFull, forecastData } };
  } else if (action.type === LOAD_WEATHER_COMPLEATED) {
    const { city, weather } = action.payload;
    const cityFull = state[city];
    return { ...state, [city]: { ...cityFull, weather } };
  }
  return state;
};

export const getForecastData = createSelector(
  (cities, city) => cities[city] && cities[city].forecastData,
  (f) => f
);

export const getWeather = createSelector(
  (cities, city) => cities[city] && cities[city].weather,
  (f) => f
);

export const getCitiesNames = createSelector(
  (cities) => Object.keys(cities),
  (names) => names
);
const readWeatherOF = (cities, c) =>
  cities[c] != null && cities[c].weather != null ? cities[c].weather : null;

export const getCitiesWeather = createSelector(
  (cities) => {
    const cityNames = Object.keys(cities);
    const resultCities = {};
    cityNames.forEach((c) => {
      resultCities[c] = {};
      resultCities[c].weather = readWeatherOF(cities, c)
    });
    return resultCities;
  },
  (c) => c
);
