import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";

const CustomerListItem = ({ customer, editAction, deleteAction, basePath }) => {
  const { dni, name } = customer;
  return (
    <div>
      <div className={"customer-list-item"}>
        <Row>
          <Col xs={12} md={4}>
            <Link to={`${basePath}/${customer.dni}`}>{name}</Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={`${basePath}/${dni}/edit`}>{editAction}</Link>
          </Col>
          <Col xs={12} md={4}>
            <Link to={`${basePath}/${dni}/delete`}>{deleteAction}</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

CustomerListItem.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
  }).isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired,
  basePath: PropTypes.string.isRequired,
};

export default CustomerListItem;
