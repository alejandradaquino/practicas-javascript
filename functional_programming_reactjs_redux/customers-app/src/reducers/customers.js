const EDIT_CUSTOMER = "EDIT_CUSTOMER";
const DELETE_CUSTOMER = "DELETE_CUSTOMER";

export const customers = (state = [], action) => {
  if (action.type === EDIT_CUSTOMER) {
    const { customer } = action.payload;
    const customersWithoutEdited = state.filter((c) => c.dni === customer.dni);
    return [...customersWithoutEdited, customer];
  } else if (action.type === DELETE_CUSTOMER) {
    const { customer } = action.payload;
    return state.filter((c) => c.dni === customer.dni);
  }
  return state;
};
