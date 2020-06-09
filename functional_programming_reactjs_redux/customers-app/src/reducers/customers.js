import { FETCH_CUSTOMERS_COMPLETED } from "../actions";

export const customers = (state = [], action) => {
  if (action.type === FETCH_CUSTOMERS_COMPLETED) {
    console.log(action);
    return action.payload;
  }
  return state;
};


export const findCustomer = (customers, dni) => {
  return customers.filter(f=>f.dni == dni)[0];
} 