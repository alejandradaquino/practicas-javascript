import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers";

const initialState = {
  city: "",
  previousCity: null,
  forecastData: null
};
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

export const store = createStore(
  combineReducers,
  initialState,
  enhancer
);
