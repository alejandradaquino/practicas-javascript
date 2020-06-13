import React, { Component } from "react";
import PropTypes from "prop-types";
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
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }
  render() {
    return (
      this.props.dni && (
        <Route
          path="/customers/:dni/edit"
          children={({ match }) =>
            match ? (
              <CustomerEdition
                {...this.props.customer}
                editing={true}
                onSubmitSuccess={() => handleOnBack(this.props)}
                onSubmit={(values) => handleSubmit(this.props, values)}
                onBack={() => handleOnBack(this.props)}
              ></CustomerEdition>
            ) : (
              <CustomerData
                {...this.props.customer}
                onBack={() => handleOnBack(this.props)}
              ></CustomerData>
            )
          }
        ></Route>
      )
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
