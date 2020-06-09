import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerEdition from "./components/CustomerEdition";

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
              component={CustomerEdition}
            ></Route>
            <Switch>
              <Route
                path="/customers/new"
                component={() => <CustomerEdition></CustomerEdition>}
              ></Route>
              <Route
                exact
                path="/customers/:dni"
                component={() => <CustomerEdition></CustomerEdition>}
              ></Route>
            </Switch>
          </Col>
        </Row>
      </Grid>
    </Router>
  );
}

export default App;
