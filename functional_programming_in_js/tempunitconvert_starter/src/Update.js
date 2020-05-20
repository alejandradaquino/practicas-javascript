import * as R from 'ramda';

export const MSGS = {
    INPUT_CHANGED: 'INPUT_CHANGED',
    SELECT_CHANGED: 'SELECT_CHANGED'
};

export function inputChangedMsg(value, position) {
    return {
        type: MSGS.INPUT_CHANGED,
        body: { value, position }
    };
}

export function selectChangedMsg(unit, position) {
    return {
        type: MSGS.SELECT_CHANGED,
        body: { unit, position }
    };
}

const KELVIN_CONSTANT = 273.15;
const conversions = {
    celsiusfarenheight: celsiusToFarenheight,
    celsiuskelvin: celsiusToKelvin,
    farenheightcelsius: farenheightToCelsius,
    farenheightkelvin: farenheightToKelvin,
    kelvincelsius: kelvinToCelsius,
    kelvinfarenheight: kelvinToFarenheight,
}

function celsiusToFarenheight(celsius) {
    return celsius * 9 / 5 + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + KELVIN_CONSTANT;
}

function kelvinToCelsius(kelvin) {
    return kelvin - KELVIN_CONSTANT;
}

function farenheightToCelsius(farenheight) {
    return (farenheight - 32) * 5 / 9;
}

function farenheightToKelvin(farenheight) {
    return R.pipe(farenheightToCelsius, celsiusToKelvin)(farenheight);
}

function kelvinToFarenheight(kelvin) {
    return R.pipe(kelvinToCelsius, celsiusToFarenheight)(kelvin);
}

function transform(temperature, unitFrom, unitTo) {
    console.log(unitFrom, unitTo, temperature);
    if (unitFrom === unitTo) {
        return temperature;
    }
    console.log(conversions[unitFrom + unitTo], conversions[unitFrom + unitTo](temperature));
    return conversions[unitFrom + unitTo](temperature);
}

function calculateFromInput(msg, model) {
    const { value: value, position } = msg.body;
    const valueNumeric = R.pipe(parseInt, R.defaultTo(0))(value);
    const { temperatureB, temperatureA } = model;
    const updatedValue = transform(value, temperatureA.unit, temperatureB.unit);
    const updatedTemperatureB = {...temperatureB, value: updatedValue }
    const updatedTemperatureA = {...temperatureA, value: valueNumeric }
    return {...model,
        temperatureB: updatedTemperatureB,
        temperatureA: updatedTemperatureA
    };

}

function calculateFromSelect(msg, model) {
    const { unit, position } = msg.body;
    const { temperatureB, temperatureA } = model;
    const unitA = position === 'left' ? unit : temperatureA.unit;
    const unitB = position === 'right' ? unit : temperatureB.unit;
    const updatedValue = transform(temperatureA.value, unitA, unitB);
    console.log(position, unitA, unitB, updatedValue);
    return {...model,
        temperatureA: {...temperatureA, unit: unitA },
        temperatureB: {...temperatureB, unit: unitB, value: updatedValue }
    };

}

function update(msg, model) {
    console.log(msg.body);
    switch (msg.type) {
        case MSGS.INPUT_CHANGED:
            return calculateFromInput(msg, model);
        case MSGS.SELECT_CHANGED:
            return calculateFromSelect(msg, model);
    }
    return model;
}

export default update;