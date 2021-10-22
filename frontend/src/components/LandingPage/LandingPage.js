import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row } from "reactstrap";

import Logo from "../../media/images/logo.png";
import "./LandingPage.css";
//import "./IssueTracker.css";

function LandingPage() {
  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/issues");
    }
  }, [history]);
  return (
    <div>
      <Container className="main-container">
        <Row className="row">
          <img src={Logo} className="logo" alt="logo" />
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
