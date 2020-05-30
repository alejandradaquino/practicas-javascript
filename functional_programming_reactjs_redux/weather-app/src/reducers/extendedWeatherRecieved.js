export const extendedWeatherRecieved = (state = {}, action) => {
  return {
    ...state,
    forecastData: action.payload,
  };
};
