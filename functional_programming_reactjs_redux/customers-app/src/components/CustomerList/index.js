import React from "react";
import PropTypes from "prop-types";
import { getCustomers } from "../../reducers";
import CustomerList from "./CustomerList";
import { connect } from "react-redux";

const CustomerListContainer = ({ customers }) => {
  return (
    <CustomerList customers={customers} basePath="customers"></CustomerList>
  );
};

CustomerListContainer.propTypes = {
  customers: PropTypes.array.isRequired,
};

const mapDispatchoProps = (dispatch) => ({});

const mapStateToProps = (state) => {
  return {
    customers: getCustomers(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchoProps
)(CustomerListContainer);
