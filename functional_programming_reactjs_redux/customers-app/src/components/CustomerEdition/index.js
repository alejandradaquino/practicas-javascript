import React from "react";
import PropTypes from "prop-types";
import CustomerEdition from "./CustomerEdition";
import CustomerData from "./CustomerData";
import { connect } from "react-redux";
import { withRouter, Route } from "react-router";
import { findCustomer } from "../../reducers";

const CustomerEditionContainer = (props) => {
  return (
    props.dni && (
      <Route
        path="/customers/:dni/edit"
        children={({ match }) =>
          match ? (
            <CustomerEdition
              {...props.customer}
              editing={true}
            ></CustomerEdition>
          ) : (
            <CustomerData {...props.customer}></CustomerData>
          )
        }
      ></Route>
    )
  );
};

CustomerEditionContainer.propTypes = {};

const mapDispatchoProps = (dispatch) => ({});

const mapStateToProps = (state, props) => {
  return {
    customer: findCustomer(state, props.dni),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchoProps)(CustomerEditionContainer)
);
