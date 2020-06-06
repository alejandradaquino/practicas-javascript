import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "../reducers";

const customers = [
  {name: 'Emma', dni: '58026797'},
  {name: 'Juan', dni: '29733070'},
  {name: 'Alejandra', dni: '30639833'},
];

const initialState = {
  customers
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
