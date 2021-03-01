import React from "react";
import Report from "../Report/Report.js";

const reportList = (props) => {
  return props.reports.map((report) => {
    return (
      <Report
        title={report.title}
        text={report.text}
        key={report.id}
        headline={report.headline}
        viewReport={props.viewReport}
        id={report.id}
      />
    );
  });
};

export default reportList;
