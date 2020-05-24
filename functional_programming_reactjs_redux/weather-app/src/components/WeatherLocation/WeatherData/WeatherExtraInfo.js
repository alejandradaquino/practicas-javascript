import React from 'react';
import PropType from 'prop-types';
import './styles.css';

const WeatherExtraInfo= ({humidity, wind})=> (
    <div className="WeatherExtraInfoCont">
     <span> {humidity}% {`${wind} m/s viento`}</span>
    </div>
);

WeatherExtraInfo.propType = {
    humidity: PropType.number.isRequired, 
    wind: PropType.number.isRequired
}

export default WeatherExtraInfo;