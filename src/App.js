import "./App.css";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Components/MenuComponent";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
