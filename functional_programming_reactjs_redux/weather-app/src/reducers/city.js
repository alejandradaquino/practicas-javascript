import { SET_CITY } from "../actions";

export const city = (state = {}, action) => {
  return action.type === SET_CITY ? action.payload : state;
};
