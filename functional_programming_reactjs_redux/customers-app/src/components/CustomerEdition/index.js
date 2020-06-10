import React from "react";
import PropTypes from "prop-types";
import CustomerEdition from "./CustomerEdition";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { findCustomer } from "../../reducers";

const CustomerEditionContainer = (props) => {
  return (
    props.dni && (
      <CustomerEdition customer={props.customer}></CustomerEdition>
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
