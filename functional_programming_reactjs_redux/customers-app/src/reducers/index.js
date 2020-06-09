import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { customers, findCustomer as _findCustomer } from "./customers";

export default combineReducers({
  customers,
});

export const getCustomers = createSelector(
  (state) => state.customers,
  (f) => f
);

export const findCustomer = (state, dni) => {
  return _findCustomer(getCustomers(state), dni);
};
