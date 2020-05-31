import { EXTENDED_WEATHER_COMPLETED } from "../actions";

export const extendedWeatherRecieved = (state = {}, action) => {
  return action.type === EXTENDED_WEATHER_COMPLETED ? action.payload : state;
};
 