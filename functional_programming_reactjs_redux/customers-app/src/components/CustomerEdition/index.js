import React from "react";
import PropTypes from "prop-types";
import CustomerEdition from "./CustomerEdition";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { findCustomer } from "../../reducers";

const getCustomer = (props) => {
  console.log(props, props.match.params.dni);
  return props.find(props.match.params.dni);
};

const CustomerEditionContainer = (props) => {
  return <CustomerEdition customer={getCustomer(props)}></CustomerEdition>;
};

CustomerEditionContainer.propTypes = {};

const mapDispatchoProps = (dispatch) => ({});

const mapStateToProps = (state) => {
  return { find: (dni) => findCustomer(state, dni)  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchoProps)(CustomerEditionContainer)
);
