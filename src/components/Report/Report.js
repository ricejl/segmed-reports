import React from "react";

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

export default report;
