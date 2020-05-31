import { WeatherService } from "../services/WeatherService";

export const SET_CITY = "SET_CITY";
export const GET_EXTENDED_WEATHER = "GET_EXTENDED_WEATHER";
export const EXTENDED_WEATHER_COMPLETED = "EXTENDED_WEATHER_COMPLETED";
export const LOAD_WEATHER_COMPLEATED = "LOAD_WEATHER_COMPLEATED";

const weatherService = new WeatherService();

const loadWeatherCompleated = (payload)=>{
  return { type: LOAD_WEATHER_COMPLEATED, payload}
}

const extendedWeatherCompleted = (city, forecastData) => {
 return { type: EXTENDED_WEATHER_COMPLETED, payload: { city, forecastData } };
};

export const setCity = (payload) => {
  return { type: SET_CITY, payload };
};

export const loadWeather = city => {
  return dispatch => { 
    weatherService.getWeatherData(city).subscribe(weather => {
      dispatch(loadWeatherCompleated({city, weather}));
    });
  }
}

export const getExtendedWeather = (city) => {
  return (dispatch) => {
    weatherService.getForecastData(city).subscribe((forecastData) => {
      dispatch(extendedWeatherCompleted(city, forecastData));
    });
  };
};
