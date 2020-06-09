import { Observable } from "rxjs";

export class CustomerService {
  customers = [
    { name: "Emma", dni: "58026797" },
    { name: "Juan", dni: "29733070" },
    { name: "Alejandra", dni: "30639833" },
  ];

  fetchCustomers = () => {
    return new Observable((subscriber) => {
      subscriber.next(this.customers);
    });
  };

  addCustomer = (customer) => {
    return new Observable((subscriber) => {
      this.customers = [...this.customers, customer];
      subscriber.complete(this.customers);
    });
  };

  editCustomer = (customer) => {
    return new Observable((subscriber) => {
      this.customers = this.customers.filter((c) => c.dni !== customer.dni);
      this.customers = [...this.customers, customer];
      subscriber.complete(this.customers);
    });
  };

  deleteCustomer = (customer) => {
    return new Observable((subscriber) => {
      this.customers = this.customers.filter((c) => c.dni !== customer.dni);
      subscriber.complete(this.customers);
    });
  };
}
