import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerEdition from "./components/CustomerEdition";
import NewCustomer from "./components/CustomerEdition/NewCustomer";
import DeleteCustomer from "./components/CustomerEdition/DeleteCustomer";

function App() {
  return (
    <Router>
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h1" color="inherit">
                Customers
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Route
              exact
              path="/"
              component={() => <CustomerList></CustomerList>}
            ></Route>
            <Route
              exact
              path="/customers/:dni/edit"
              render={(props) => <CustomerEdition  {...props}  dni={props.match.params.dni}></CustomerEdition>}
            ></Route>
            <Route
              exact
              path="/customers/:dni/delete"
              render={(props) => <DeleteCustomer {...props} dni={props.match.params.dni}></DeleteCustomer>}
            ></Route>
            <Switch>
              <Route
                path="/customers/new"
                component={() => <NewCustomer ></NewCustomer>}
              ></Route>
              <Route
                exact
                path="/customers/:dni"
                render={(props) => <CustomerEdition {...props} dni={props.match.params.dni}></CustomerEdition>}
              ></Route>
            </Switch>
          </Col>
        </Row>
      </Grid>
    </Router>
  );
}

export default App;
