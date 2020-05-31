import { WeatherService } from "../services/WeatherService";

export const SET_CITY = "SET_CITY";
export const GET_EXTENDED_WEATHER = "GET_EXTENDED_WEATHER";
export const EXTENDED_WEATHER_COMPLETED = "EXTENDED_WEATHER_COMPLETED";

const weatherService = new WeatherService();

export const setCity = (payload) => {
  return { type: SET_CITY, payload };
};

export const extendedWeatherCompleted = (city, forecastData) => {
  return { type: EXTENDED_WEATHER_COMPLETED, payload: { city, forecastData } };
};

export const getExtendedWeather = (city) => {
  return (dispatch) => {
    weatherService.getForecastData(city).subscribe((forecastData) => {
      dispatch(extendedWeatherCompleted(city, forecastData));
    });
  };
};
