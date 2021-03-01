import React from "react";

const reportDetail = (props) => {
  if (!props.report.id) {
    return <div></div>;
  }
  return (
    <div className="ReportDetail">
      <div>{props.report.title}</div>
      <iframe src={props.report.uri} title={props.report.title}></iframe>
    </div>
  );
};

export default reportDetail;
