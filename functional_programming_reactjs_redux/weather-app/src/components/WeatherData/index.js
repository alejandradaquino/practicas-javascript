import React from "react";
import WeatherExtraInfo from "../WeatherExtraInfo";
import WeatherTemperature from "../WeatherTemperature";
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WIND } from "../../constants/Weathers";

const WeatherData = () => (
  <div>
    <WeatherTemperature
      temperature={20}
      weatherState={SUN}
    ></WeatherTemperature>
    <WeatherExtraInfo humidity={"80"} wind={12}></WeatherExtraInfo>
  </div>
);

export default WeatherData;
