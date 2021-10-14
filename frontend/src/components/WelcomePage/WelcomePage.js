import React from "react";
import Logo from "./logo.png";
import { Col, Button } from "reactstrap";

import "./WelcomePage.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  //const [modal, setModal] = useState(false);
  //const toggleModal = () => setModal(!modal);
  return (
    <div className="welcome-container">
      <img src={Logo} className="logo" alt="logo" />
      <Col className="welcome-buttons">
        <Link to="/login">
          <Button color="info" size="lg">
            Login
          </Button>
        </Link>
        <Link to="/">
          <Button color="info" size="lg">
            Register
          </Button>
        </Link>
      </Col>
    </div>
  );
}

export default WelcomePage;
