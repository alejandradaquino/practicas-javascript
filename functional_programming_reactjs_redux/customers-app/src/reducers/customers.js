import { FETCH_CUSTOMERS_COMPLETED } from "../actions";
import { handleActions } from "redux-actions";

export const customers = handleActions(
  {
    [FETCH_CUSTOMERS_COMPLETED]: (state, action) => [...action.payload],
  },
  []
);

export const findCustomer = (customers, dni) => {
  return dni
    ? customers.filter((f) => f.dni === dni)[0]
    : { dni: "", name: "", age: 0 };
};
