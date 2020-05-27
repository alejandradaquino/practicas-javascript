import { OpenWeatherService } from "./OpenWeatherService";
import { map } from "rxjs/operators";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
} from "../constants/Weathers";
const KELVIN_CONSTANT = 273.15;

export class WeatherService {
  openWeatherService;

  constructor() {
    this.openWeatherService = new OpenWeatherService();
  }

  kelvinToCelsius = (kelvin) =>
    parseFloat((kelvin - KELVIN_CONSTANT).toFixed());

  mapState = (id) => {
    if (id < 300) return THUNDER;
    if (id < 400) return DRIZZLE;
    if (id < 600) return RAIN;
    if (id < 700) return SNOW;
    if (id === 800) return SUN;
    return CLOUD;
  };

  convertData = (json) => {
    const { temp, humidity } = json.main;
    const { speed } = json.wind;
    return {
      temperature: this.kelvinToCelsius(temp),
      humidity: humidity,
      wind: speed + " m/s",
      weatherState: this.mapState(json.weather[0].id),
    };
  };

  convertResponse = (json) => {
    const { name } = json;
    return {
      city: name,
      data: this.convertData(json),
    };
  };
  convertForecastResponse = (json) => {
    const { list } = json;
    return list.map((forecast) => {
      const dateTime = forecast.dt_txt;
      const data = this.convertData(forecast);
      return { name: dateTime, data };
    });
  };

  getWeatherData = (location) =>
    this.openWeatherService
      .getWeather(location)
      .pipe(map(this.convertResponse));

  getForecastData = (location) =>
    this.openWeatherService
      .getForecast(location)
      .pipe(map(this.convertForecastResponse));
}
