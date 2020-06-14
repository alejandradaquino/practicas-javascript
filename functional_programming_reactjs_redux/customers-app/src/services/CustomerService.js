import { Observable } from "rxjs";

export class CustomerService {
  customers = [
    { name: "Emma", dni: "58026797", age: 0 },
    { name: "Juan", dni: "29733070", age: 37 },
    { name: "Alejandra", dni: "30639833", age: 36 },
  ];

  fetchCustomers = () => {
    return new Observable((subscriber) => {
      subscriber.next(this.customers);
    });
  };

  addCustomer = (customer) => {
    return new Observable((subscriber) => {
      this.customers = this.customers.filter((c) => c.dni !== customer.dni);
      this.customers = [...this.customers, customer];
      subscriber.next(this.customers);
    });
  };

  editCustomer = (customer) => {
    return new Observable((subscriber) => {
      this.customers = this.customers.filter((c) => c.dni !== customer.dni);
      this.customers = [...this.customers, customer];
      subscriber.next(this.customers);
    });
  };

  deleteCustomer = (customer) => {
    return new Observable((subscriber) => {
      this.customers = this.customers.filter((c) => c.dni !== customer.dni);
      subscriber.next(this.customers);
    });
  };
}
