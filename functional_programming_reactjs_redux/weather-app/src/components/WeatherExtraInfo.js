import React from 'react';
import PropType from 'prop-types';

const WeatherExtraInfo= ({humidity, wind})=> (
    <div>
     <span>Humidity: {humidity}</span>
     <br/>
     <span>Wind: {wind}</span>
    </div>
);

WeatherExtraInfo.propType = {
    humidity: PropType.number.isRequired, 
    wind: PropType.number.isRequired
}

export default WeatherExtraInfo;