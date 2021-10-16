import React, { useEffect } from "react";
import Logo from "../../media/images/logo.png";
import { Col, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";

import "./WelcomePage.css";

function WelcomePage() {
  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      history.push("/issues");
    }
  }, [history]);
  return (
    <div className="welcome-container">
      <img src={Logo} className="logo" alt="logo" />
      <Col className="welcome-buttons">
        <Link to="/login">
          <Button color="info" size="lg">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button color="info" size="lg">
            Register
          </Button>
        </Link>
      </Col>
    </div>
  );
}

export default WelcomePage;
