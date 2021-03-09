import React, { Component } from "react";
import Report from "../../../components/Report/Report.js";
import axios from "axios";
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
          <Link to={"/" + report.id} key={report.id} className="ReportLink">
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
      <div className="TableFormat col-12">
        <div>{reports}</div>
      </div>
    );
  }
}

export default ReportList;
