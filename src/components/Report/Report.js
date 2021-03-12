import React from "react";
import { withRouter } from "react-router-dom";

const report = (props) => {
  return (
    <div
      className="row ReportRow"
      onClick={() => {
        props.viewReport(props.id);
      }}
    >
      <div className="col-xs-6 col-md-4 col-lg-3 col-xl-2 ReportTitle">
        {props.title}
      </div>
      <div className="col HeadlineBody">
        <div className="ReportHeadline">
          <span className="HeadlineOverflow">
            <span>{props.headline}</span>
          </span>
        </div>
        <span className="ReportBody"> - {props.text}</span>
      </div>
    </div>
  );
};

export default withRouter(report);
