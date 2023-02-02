import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateProfile } from "../../redux/actions/userActions";
import ErrorMessage from "../ErrorMessage";
import IssueTracker from "../IssueTracker/IssueTracker";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setFirstName(userInfo.firstName);
      setLastName(userInfo.lastName);
      setUserName(userInfo.userName);
      setEmail(userInfo.email);
    }
  }, [navigate, userInfo]);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password === confirmPassword)
      dispatch(
        updateProfile({ firstName, lastName, userName, email, password })
      );
  };

  return (
    <div className="main-container">
      <IssueTracker title="My Profile">
        <div>
          <Form className="profile" onSubmit={submitHandler}>
            {loading && <Loading />}
            {success && (
              <ErrorMessage color="success">Updated Successfully</ErrorMessage>
            )}
            {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
            <Row>
              <Col>
                <FormGroup className="col-6 float-start pe-2">
                  <Label className="label">First name</Label>
                  <Input
                    className="input"
                    name="firstName"
                    type="name"
                    placeholder="Enter First name"
                    value={firstName}
                    autoComplete="nope"
                    autoFocus
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col-6 float-end ps-2">
                  <Label className="label">Last name</Label>
                  <Input
                    className="input"
                    name="lastName"
                    type="name"
                    placeholder="Enter Last name"
                    value={lastName}
                    autoComplete="nope"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col-6 float-start pe-2">
                  <Label className="label">User name</Label>
                  <Input
                    className="input"
                    name="userName"
                    type="name"
                    placeholder="Enter a username"
                    value={userName}
                    autoComplete="nope"
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col-6 float-end ps-2">
                  <Label className="label">Email</Label>
                  <Input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    value={email}
                    autoComplete="nope"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col-6 float-start pe-2">
                  <Label className="label">Password</Label>
                  <Input
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    id="password"
                    value={password}
                    autoComplete="nope"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </FormGroup>
                <FormGroup className="col-6 float-end ps-2">
                  <Label className="label">Confirm Password</Label>
                  <Input
                    className="input"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    autoComplete="nope"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Col className="register-button">
              <Button type="submit" color="info" className="mt-4">
                Update
              </Button>
            </Col>
          </Form>
        </div>
      </IssueTracker>
    </div>
  );
};

export default Profile;
