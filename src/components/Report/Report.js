import React from "react";
import { withRouter } from "react-router-dom";

const report = (props) => {
  return (
    <tr
      onClick={() => {
        props.viewReport(props.id);
      }}
    >
      <td className="ReportTitle">{props.title}</td>
      <td className="ReportHeadline">
        {props.headline} <span className="ReportBody">- {props.text}</span>
      </td>
    </tr>
  );
};

export default withRouter(report);
