import { combineReducers } from "redux";
import { city } from "./city";
import {cities} from './cities';
import { extendedWeatherRecieved } from "./extendedWeatherRecieved";

export  default combineReducers({
  city,
  cities,
  forecastData: extendedWeatherRecieved,
});
 