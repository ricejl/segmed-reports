import React, { Component } from "react";
import ReportList from "./ReportList/ReportList";
import { BrowserRouter, Route } from "react-router-dom";
import ReportDetail from "./ReportDetail/ReportDetail";

class ReportHub extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ReportHub">
          {/* <ReportList /> */}
          <Route path="/" exact component={ReportList} />
          <Route path="/:id" component={ReportDetail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default ReportHub;
