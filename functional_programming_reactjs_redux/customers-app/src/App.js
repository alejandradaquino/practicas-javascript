import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CustomerList from "./components/CustomerList";

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
            <div className="App">
              <Link to="/customers">Customers</Link>
              <Link to="/customers/30000000">Customer 30.000.000</Link>
            </div>
            <CustomerList></CustomerList>
          </Col>
        </Row>
      </Grid>
    </Router>
  );
}

export default App;
