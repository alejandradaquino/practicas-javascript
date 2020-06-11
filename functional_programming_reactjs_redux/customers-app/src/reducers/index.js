import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { customers, findCustomer as _findCustomer } from "./customers";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  customers,
  form: reduxForm,
});

export const getCustomers = createSelector(
  (state) => state.customers,
  (f) => f
);

export const findCustomer = (state, dni) => {
  return _findCustomer(getCustomers(state), dni);
};
