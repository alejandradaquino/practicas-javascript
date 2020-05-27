import { Observable } from "rxjs";
const apiKey = "0c74b18247dd98d6fdbe5da1557b29e1";
const urlOpenWeather = "http://api.openweathermap.org/data/2.5/weather";
const urlOpenForecast = "http://api.openweathermap.org/data/2.5/forecast";

export class OpenWeatherService {
  apiWeatherUrl = (location = "Buenos Aires, Ar") => {
    return `${urlOpenWeather}?q=${location}&APPID=${apiKey}`;
  };

  apiForecastUrl = (location = "Buenos Aires, Ar") => {
    return `${urlOpenForecast}?q=${location}&APPID=${apiKey}`;
  };

  getWeather = (location) => {
    return new Observable((subscriber) => {
      fetch(this.apiWeatherUrl(location))
        .then((response) => response.json())
        .then((json) => subscriber.next(json));
    });
  };
  
  getForecast = (location) => {
    return new Observable((subscriber) => {
      fetch(this.apiForecastUrl(location))
        .then((response) => response.json())
        .then((json) => subscriber.next(json));
    });
  };
}
