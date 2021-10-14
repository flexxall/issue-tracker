import React from "react";
import { Row, Col } from "reactstrap";

import "./Header.css";

const header = () => {
  return (
    <Row className="header">
      <Col className="col-6 offset-3 header">
        <h1>Issue Tracker</h1>
      </Col>
    </Row>
  );
};

export default header;
