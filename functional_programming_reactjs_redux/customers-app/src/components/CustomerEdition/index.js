import React, { Component } from "react";
import CustomerEdition from "./CustomerEdition";
import CustomerData from "./CustomerData";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router";
import { findCustomer } from "../../reducers";
import { editCustomer, fetchCustomers } from "../../actions";

const handleSubmit = (props, values) => {
  props.editCustomer({ name: values.name, dni: values.dni, age: values.age });
};

const handleOnBack = (props) => {
  props.history.goBack();
};

class CustomerEditionContainer extends Component {
  
  handleSubmitSuccess =() => handleOnBack(this.props);
  handleSubmitFunction = (values) => handleSubmit(this.props, values);
  handleOnBackFunction = () => handleOnBack(this.props);
  render() {
    return (
      <div>
        <Route
          path="/customers/:dni/edit"
          children={({ match }) => {
            console.log(this.props, match);
            return (
              match &&
              match.url !== "/customers/new" && (
                <CustomerEdition
                  {...this.props.customer}
                  editing={true}
                  onSubmitSuccess={this.handleSubmitSuccess}
                  onSubmit={this.handleSubmitFunction}
                  onBack={this.handleOnBackFunction}
                ></CustomerEdition>
              )
            );
          }}
        ></Route>
        <Route
          path="/customers/:dni"
          exact
          children={({ match }) => {
            return (
              match &&
              match.url !== "/customers/new" && (
                <CustomerData
                  {...this.props.customer}
                  onBack={() => handleOnBack(this.props)}
                ></CustomerData>
              )
            );
          }}
        ></Route>
      </div>
    );
  }
}

CustomerEditionContainer.propTypes = {};

const mapDispatchoProps = (dispatch) => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  editCustomer: (customer) => dispatch(editCustomer(customer)),
});

const mapStateToProps = (state, props) => {
  return {
    customer: findCustomer(state, props.dni),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchoProps)(CustomerEditionContainer)
);
