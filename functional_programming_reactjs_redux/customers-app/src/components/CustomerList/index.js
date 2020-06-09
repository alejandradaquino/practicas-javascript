import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCustomers } from "../../reducers";
import CustomerList from "./CustomerList";
import { connect } from "react-redux";
import { fetchCustomers } from "../../actions";

class CustomerListContainer extends Component {
  componentDidMount(){
    this.props.fetchCustomers()
  }
  render() {
    const { customers } = this.props;
    return (
      customers && <CustomerList customers={customers} basePath="customers"></CustomerList>
    );
  }
}

CustomerListContainer.propTypes = {
  customers: PropTypes.array.isRequired,
};

const mapDispatchoProps = {fetchCustomers};

const mapStateToProps = (state) => {
  return {
    customers: getCustomers(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchoProps
)(CustomerListContainer);
