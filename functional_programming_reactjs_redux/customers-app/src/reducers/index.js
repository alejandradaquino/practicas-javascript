import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { customers } from "./customers";

export default combineReducers({
  customers,
});

export const getCustomers = (state) => {
  return createSelector(
    (state) => state.customers,
    (f) => f
  )(state);
};
