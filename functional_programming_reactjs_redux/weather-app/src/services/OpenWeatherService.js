const apiKey = "0c74b18247dd98d6fdbe5da1557b29e1";
const urlOpenWeather = "http://api.openweathermap.org/data/2.5/weather";
import { from } from "rxjs";

class OpenWeatherService {
  apiUrl = (location = "Buenos Aires, Ar") => {
    return `${urlOpenWeather}?q=${location}&APPID=${apiKey}`;
  };

  getWeather = location => {
    return from(apiUrl(location)).map(response => response.json());
  };
}
