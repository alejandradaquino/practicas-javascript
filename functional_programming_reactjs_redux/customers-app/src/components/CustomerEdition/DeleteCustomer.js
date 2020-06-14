import React, { Component } from "react";
import CustomerEdition from "./CustomerEdition";
import CustomerData from "./CustomerData";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router";
import { findCustomer } from "../../reducers";
import { deleteCustomer, fetchCustomers } from "../../actions";

const handleDelete = (props, values) => {
  props.deleteCustomer(values);
};

const handleOnBack = (props) => {
  props.history.goBack();
};

class DeleteCustomerContainer extends Component {
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }
  render() {
    return (
      <div>
        <Route
          path="/customers/:dni/delete"
          exact
          children={({ match }) => {
            return match && this.props.customer ? (
              <CustomerData
                {...this.props.customer}
                onBack={() => handleOnBack(this.props)}
                onDelete={(values) => handleDelete(this.props, values)}
              ></CustomerData>
            ) : (
              <button type="button" onClick={() => handleOnBack(this.props)}>
                Volver
              </button>
            );
          }}
        ></Route>
      </div>
    );
  }
}

DeleteCustomerContainer.propTypes = {};

const mapDispatchoProps = (dispatch) => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  deleteCustomer: (customer) => dispatch(deleteCustomer(customer)),
});

const mapStateToProps = (state, props) => {
  return {
    customer: findCustomer(state, props.dni),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchoProps)(DeleteCustomerContainer)
);
