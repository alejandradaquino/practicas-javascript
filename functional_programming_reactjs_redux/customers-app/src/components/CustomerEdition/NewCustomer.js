import React, { Component } from "react";
import CustomerEdition from "./CustomerEdition";
import CustomerData from "./CustomerData";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router";
import { addCustomer, fetchCustomers } from "../../actions";

const handleSubmit = (props, values) => {
  props.addCustomer({ name: values.name, dni: values.dni, age: values.age });
};

const handleOnBack = (props) => {
  props.history.goBack();
};

class NewCustomerContainer extends Component {
  
  handleSubmitSuccess =() => handleOnBack(this.props);
  handleSubmitFunction = (values) => handleSubmit(this.props, values);
  handleOnBackFunction = () => handleOnBack(this.props);
 
  render() {
    return (
      <div>
        <h4>Nuevo cliente</h4>
        <Route
          path="/customers/new"
          children={({ match }) => {
            return (
              match && (
                <CustomerEdition
                  {... { dni: "", name: "", age: 0 }}
                  editing={true}
                  onSubmitSuccess={this.handleSubmitSuccess}
                  onSubmit={this.handleSubmitFunction}
                  onBack={this.handleOnBackFunction}
                ></CustomerEdition>
              )
            );
          }}
        ></Route>
      </div>
    );
  }
}

NewCustomerContainer.propTypes = {};

const mapDispatchoProps = (dispatch) => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  addCustomer: (customer) => dispatch(addCustomer(customer)),
});

export default withRouter(
  connect(null, mapDispatchoProps)(NewCustomerContainer)
);
