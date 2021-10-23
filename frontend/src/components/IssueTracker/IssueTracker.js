import React from "react";
import { Row } from "reactstrap";

function IssueTracker({ children, title }) {
  return (
    <Row>
      <div>
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
