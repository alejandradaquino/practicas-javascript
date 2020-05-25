import {OpenWeatherService} from './OpenWeatherService'
import { map } from 'rxjs/operators';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WIND } from "../constants/Weathers";
const KELVIN_CONSTANT = 273.15;


export class WeatherService {
    openWeatherService;

    constructor(){
        this.openWeatherService = new OpenWeatherService();
    }


  kelvinToCelsius = kelvin => {
    return parseFloat((kelvin - KELVIN_CONSTANT).toFixed());
  };

  mapState = response => {
    switch (response) {
      case "clouds":
        return CLOUD;
    }
    return WIND;
  };

  convertResponse = json => {
    const { name } = json;
    const { temp, humidity } = json.main;
    const { speed } = json.wind;
    const { main } = json.weather;

    return {
      city: name,
      data: {
        temperature: this.kelvinToCelsius(temp),
        humidity: humidity,
        wind: speed + " m/s",
        weatherState: this.mapState(main)
      }
    };
  };

  getWeatherData = location => this.openWeatherService.getWeather(location).pipe(map(this.convertResponse));
}
