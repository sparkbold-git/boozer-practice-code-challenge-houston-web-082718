import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CocktailsContainer from "./components/CocktailsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo " src={logo} alt="" />
          <div className="App-title">Welcome to Boozer App</div>
        </div>
        <CocktailsContainer />
      </div>
    );
  }
}

export default App;
