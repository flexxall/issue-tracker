import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Loading from "../Loading";
import LoginErrorMessage from "../LoginErrorMessage";
import { login } from "../../redux/actions/userActions";
import Logo from "../../media/images/logo.png";

import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/issues");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="main-container">
      <Row className="logo-button">
        <Col>
          <Link to="/">
            <img src={Logo} className="logo-sm" alt="logo" />
          </Link>
        </Col>
      </Row>
      {error && <LoginErrorMessage color="danger">{error}</LoginErrorMessage>}
      {loading && <Loading />}
      <Form className="login" onSubmit={submitHandler}>
        <Row>
          <Col>
            <FormGroup>
              <Label className="label">Email</Label>
              <Input
                className="input"
                name="email"
                type="email"
                placeholder="Enter email"
                id="email"
                value={email}
                autoComplete="off"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label">Password</Label>
              <Input
                className="input"
                name="password"
                type="password"
                placeholder="Enter password"
                id="password"
                value={password}
                autoComplete="off"
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Col className="register-button">
          <Button type="submit" color="info" className="mt-4">
            Login
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default Login;
