import "./App.css";
import React, { Component } from "react";
import "../components/Report/Report.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo+black.png";
import ReportHub from "./ReportHub/ReportHub";

class App extends Component {
  render() {
    const logoStyle = {
      maxHeight: "50px",
      margin: "15px",
    };

    return (
      <div className="App container-fluid">
        <header className="row">
          <div className="col">
            <img style={logoStyle} src={logo} alt="logo"></img>
          </div>
        </header>
        <ReportHub />
        <footer></footer>
      </div>
    );
  }
}

export default App;
