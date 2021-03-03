import React, { Component } from "react";
import Report from "../../../components/Report/Report.js";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

class ReportList extends Component {
  state = {
    reports: [],
    selectedReportId: null,
    selectedReport: {},
  };

  componentDidMount = () => {
    axios.get("https://localhost:5001/reports").then((response) => {
      this.setState({
        reports: response.data,
      });
    });
  };

  selectedReportHandler = (reportId) => {
    const report = {
      ...this.state.reports.filter((r) => r.id === reportId).pop(),
    };
    this.setState({ selectedReportId: reportId, selectedReport: report });
  };

  render() {
    let reports = <p style={{ textAlign: "center" }}>Something went wrong.</p>;
    if (!this.state.error) {
      reports = this.state.reports.map((report) => {
        return (
          <Link to={"/" + report.id} key={report.id}>
            <Report
              title={report.title}
              text={report.text}
              headline={report.headline}
              viewReport={() => this.selectedReportHandler(report.id)}
              id={report.id}
            />
          </Link>
        );
      });
    }

    return (
      <Table className="Table" bordered hover variant="dark">
        <tbody>{reports}</tbody>
      </Table>
    );
  }
}

export default ReportList;
