import React, { Component } from "react";
import axios from "axios";

class ReportDetail extends Component {
  state = {
    loadedReport: null,
  };

  componentDidMount() {
    let reportId = this.props.match.params.id;
    axios.get("https://localhost:5001/reports/" + reportId).then((response) => {
      console.log(response);
      this.setState(
        {
          loadedReport: response.data,
        },
        () => {
          console.log("state after axios call and set state", this.state);
        }
      );
    });
  }

  render() {
    let report = this.state.loadedReport;
    if (report == null) {
      return <div></div>;
    }

    return (
      <div className="ReportDetail">
        <div>{report.title}</div>
        <hr />
        <iframe
          className="ReportSource"
          src={report.uri}
          title={report.title}
        ></iframe>
      </div>
    );
  }
}

export default ReportDetail;
