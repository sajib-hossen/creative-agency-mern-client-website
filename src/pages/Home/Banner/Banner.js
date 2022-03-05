import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import bannerimgae from "../../../images/logos/Frame.png";
import Navigation from "../../Shared/Navigation/Navigation";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row className="banner-row">
          <Navigation />
          <Col sm={12} md={6} lg={6} className="banner-left">
            <div className="banner_text">
              <h1>
                let's Grow Your <br /> Brand To The <br />
                Next Level
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, doloremque libero maxime aliquam voluptatibus,
              </p>
              <button>Hire Me</button>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="banner-right">
            <img src={bannerimgae} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
