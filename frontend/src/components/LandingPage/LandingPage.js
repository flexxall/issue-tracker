import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";

import Logo from "../../media/images/logo.png";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/issues");
    }
  }, [navigate]);

  return (
    <div className="main-container">
      <Container>
        <Row>
          <div className="row">
            <img src={Logo} style={{ width: 400 }} className="logo" alt="logo" />
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
