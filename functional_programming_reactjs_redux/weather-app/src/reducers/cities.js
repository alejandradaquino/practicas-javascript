import { EXTENDED_WEATHER_COMPLETED } from "../actions";

export const cities = (state = {}, action) => {
  if (action.type === EXTENDED_WEATHER_COMPLETED) {
    const { city, forecastData } = action.payload;
    return { ...state, [city]: { forecastData } };
  }
  return state;
};
