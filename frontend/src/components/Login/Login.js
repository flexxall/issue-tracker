import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { login } from "../../actions/userActions";
import Logo from "../../media/images/logo.png";
import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  //export default connect((state: {user: User}) => ({ user: state.user }))(Nav);
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
    <div className="login-container">
      <Row className="logo-button">
        <Col>
          <Link to="/">
            <img src={Logo} className="logo-sm" alt="logo" />
          </Link>
        </Col>
      </Row>
      {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <Form className="login" onSubmit={submitHandler}>
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
        <Button type="submit" color="info" className="loginbutton mt-4">
          Login
        </Button>
        <Link to="/register">
          <Button type="submit" color="info" className="mt-4 float-end">
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
