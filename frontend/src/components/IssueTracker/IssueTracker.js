import React from "react";
import { Row, Container } from "reactstrap";

import "./IssueTracker.css";

function IssueTracker({ children, title }) {
  return (
    <Row>
      <div className="page-title">
        {title && (
          <>
            <h1 className="heading">{title}</h1>
            <hr />
          </>
        )}
        {children}
      </div>
    </Row>
  );
}

export default IssueTracker;
