import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import loginimg from "../../../images/login (2).svg";
import "./Register.css";
import useAuth from "./../../../hooks/useAuth";
const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, users, error, isLoading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleForm = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Did not  your password match");
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <div className="m- 0 auto login_container">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <img src={loginimg} alt="" />
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="form text-center">
              {!isLoading && (
                <form onSubmit={handleForm}>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your email"
                    onBlur={handleOnBlur}
                    id="email"
                  />
                  <input
                    type="password"
                    required
                    name="password"
                    onBlur={handleOnBlur}
                    placeholder="Enter your password"
                    id=""
                  />
                  <input
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    placeholder="Re-Type your password"
                    id=""
                  />
                  <button className="login_btn" type="submit">
                    Register
                  </button>
                  <br />
                  <br />

                  <button className="google_btn">Continue with Google</button>
                  <br />
                  <br />
                  <p>
                    {" "}
                    Already Register ? <Link to="/login">
                      Please Login
                    </Link>{" "}
                  </p>
                </form>
              )}
              {isLoading && <Spinner animation="border" />}
            </div>
            {users?.email && (
              <p className="alert alert-success" role="alert">
                😎 😎 User Create Successfully 😎 😎 😎
              </p>
            )}
            {error && (
              <p className="alert alert-danger" role="alert">
                {error}
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
