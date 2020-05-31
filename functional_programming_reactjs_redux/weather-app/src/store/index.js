import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers";

const cities = {
  "Buenos Aires, ar": null,
  "London": null,
  "Bogota, col": null,
  "Mexico, mex": null,
  "Washington": null,
  "Madrid, es": null,
};

const initialState = {
  city: "",
  cities
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
