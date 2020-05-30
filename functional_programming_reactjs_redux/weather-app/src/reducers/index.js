import { city } from "./city";
import { extendedWeatherRecieved } from "./extendedWeatherRecieved";
import { SET_CITY, EXTENDED_WEATHER_COMPLETED } from "../actions";

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return city(state, action);
    case EXTENDED_WEATHER_COMPLETED:
      return extendedWeatherRecieved(state, action);
    default:
      return state;
  }
};
