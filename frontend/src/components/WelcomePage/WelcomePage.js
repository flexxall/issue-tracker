import React, { useState } from "react";
import Login from "../Login/Login.js";
import Logo from "./logo.png";
import { Col, Button, Modal, ModalHeader, Card, CardBody } from "reactstrap";

function WelcomePage() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <div className="App">
      <div className="welcome-container">
        <img src={Logo} className="logo" alt="logo" />
        <Col className="">
          <Button color="info" size="lg" onClick={toggleModal}>
            Login
          </Button>
          <Modal isOpen={modal} contentClassName="loginModal">
            <ModalHeader toggle={toggleModal} charCode="Y" />
            <Card className="modalCard">
              <CardBody>
                <Login />
              </CardBody>
            </Card>
          </Modal>
        </Col>
      </div>
    </div>
  );
}

export default WelcomePage;
