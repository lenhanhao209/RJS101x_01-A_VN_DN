import React, { Component } from "react";
import logo from "./logo.svg";
import { Navbar, NavBarBand } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavBarBand href="/">Ristorante Con Fusion</NavBarBand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
