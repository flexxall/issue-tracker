import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";

import Logo from "../../media/images/logo.png";
import "./LandingPage.css";

function LandingPage({ history }) {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/issues");
    }
  }, [history]);

  return (
    <div className="main-container">
      <Container>
        <Row>
          <div className="row">
            <img src={Logo} className="logo" alt="logo" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
