import "./App.css";
import React, { Component } from "react";
import "../components/Report/Report.css";
import ReportList from "../components/ReportList/ReportList";
import axios from "axios";
import ReportDetail from "../components/ReportDetail/ReportDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import logo from "../assets/logo+black.png";

class App extends Component {
  componentDidMount = () => {
    axios.get("https://localhost:5001/reports").then((response) => {
      this.setState({
        reports: response.data,
      });
    });
  };

  state = {
    reports: [],
    selectedReportId: null,
    selectedReport: {},
  };

  selectedReportHandler = (reportId) => {
    const report = {
      ...this.state.reports.filter((r) => r.id === reportId).pop(),
    };
    this.setState({ selectedReportId: reportId, selectedReport: report });
  };

  render() {
    let reports = (
      <div>
        <ReportList
          reports={this.state.reports}
          viewReport={this.selectedReportHandler}
        />
      </div>
    );

    const logoStyle = {
      maxHeight: "30px",
      margin: "15px",
    };

    return (
      <div className="App">
        <header>
          <img style={logoStyle} src={logo} alt="logo"></img>
        </header>
        <Table className="Table" bordered hover variant="dark">
          <tbody>{reports}</tbody>
        </Table>
        <ReportDetail report={this.state.selectedReport} />
        <footer></footer>
      </div>
    );
  }
}

export default App;
