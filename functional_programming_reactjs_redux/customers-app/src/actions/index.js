import { CustomerService } from "../services/CustomerService";
import {createAction} from 'redux-actions';

export const FETCH_CUSTOMERS_COMPLETED = "FETCH_CUSTOMERS_COMPLETED";

const customerService = new CustomerService();

export const fetchCustomers = () => {
  return (dispatch) => {
    customerService.fetchCustomers().subscribe((customers) => {
      dispatch(fetchCustomersCompleted(customers));
    });
  };
};

export const fetchCustomersCompleted = createAction( FETCH_CUSTOMERS_COMPLETED, (customers) => customers );

export const editCustomer = (customer) => {
  return (dispatch) => {
    customerService.editCustomer(customer).subscribe((customers) => {
      dispatch(fetchCustomersCompleted(customers));
    });
  };
};

export const addCustomer = (customer) => {
  return (dispatch) => {
    customerService.addCustomer(customer).subscribe((customers) => {
      dispatch(fetchCustomersCompleted(customers));
    });
  };
};

export const deleteCustomer = (customer) => {
  return (dispatch) => {
    customerService.deleteCustomer(customer).subscribe((customers) => {
      dispatch(fetchCustomersCompleted(customers));
    });
  };
};
