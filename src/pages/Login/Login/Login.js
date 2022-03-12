import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginimg from "../../../images/login (2).svg";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, users, error, isLoading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleForm = (e) => {
    e.preventDefault();

    loginUser(loginData.email, loginData.password);
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
                    name="email"
                    placeholder="Enter your email"
                    onBlur={handleOnBlur}
                    id="email"
                  />
                  <input
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    placeholder="Enter your password"
                    id=""
                  />
                  <button className="login_btn" type="submit">
                    Login
                  </button>
                  <br />
                  <br />

                  <button className="google_btn">Continue with Google</button>
                  <br />
                  <br />
                  <p>
                    {" "}
                    Don't have a account ?{" "}
                    <Link to="/register">Create an acount</Link>{" "}
                  </p>
                </form>
              )}
              {isLoading && <Spinner animation="border" />}
            </div>
            {users?.email && (
              <p className="alert alert-success" role="alert">
                User Successfully Login 👍 👍 👍
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

export default Login;
