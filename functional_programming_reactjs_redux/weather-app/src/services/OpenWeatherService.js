import { map } from "rxjs/operators";
import { from, Observable } from "rxjs";
const apiKey = "0c74b18247dd98d6fdbe5da1557b29e1";
const urlOpenWeather = "http://api.openweathermap.org/data/2.5/weather";

export class OpenWeatherService {
  apiUrl = (location = "Buenos Aires, Ar") => {
    return `${urlOpenWeather}?q=${location}&APPID=${apiKey}`;
  };

  getWeather = location => {
    return new Observable(subscriber => {
      fetch(this.apiUrl(location))
        .then(response => response.json())
        .then(json => subscriber.next(json));
    });
  };
}
