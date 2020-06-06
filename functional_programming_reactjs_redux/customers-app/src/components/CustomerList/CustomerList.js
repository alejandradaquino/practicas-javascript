import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-flexbox-grid";
import CustomerListItem from "../CustomerListItem";
import { Grid } from "@material-ui/core";

const customers = ({ customers, basePath }) =>
  customers &&
  customers.map((c) => (
    <CustomerListItem
      key={c.dni}
      customer={c}
      basePath={basePath}
      editAction={"Editar"}
      deleteAction={"Eliminar"}
    ></CustomerListItem>
  ));

const CustomerList = (props) => {
  return (
    <div>
      <div className={"customer-list"}>
        <Grid>{customers(props)}</Grid>
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  basePath: PropTypes.string.isRequired,
};

export default CustomerList;
