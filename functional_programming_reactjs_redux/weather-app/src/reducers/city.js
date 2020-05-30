export const city = (state = {}, action) => {
  return {
    ...state,
    previousCity: state.city,
    city: action.payload,
    forecastData: null,
  };
};
