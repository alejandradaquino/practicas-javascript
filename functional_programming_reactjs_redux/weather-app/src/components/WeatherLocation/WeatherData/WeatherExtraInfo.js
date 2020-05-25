import React from 'react';
import PropType from 'prop-types';
import './styles.css';

const WeatherExtraInfo= ({humidity, wind})=> (
    <div className="WeatherExtraInfoCont">
     <div className="extraInfoText"> Humedad: {humidity}% </div>
     <div className="extraInfoText">Viento: {`${wind}`}</div>
    </div>
);

WeatherExtraInfo.propType = {
    humidity: PropType.number.isRequired, 
    wind: PropType.number.isRequired
}

export default WeatherExtraInfo;