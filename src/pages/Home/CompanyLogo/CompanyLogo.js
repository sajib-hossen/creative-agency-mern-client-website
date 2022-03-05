import React from "react";
import { Container, Row } from "react-bootstrap";
import "./CompanyLogo.css";
import logo1 from "../../../images/logos/slack.png";
import logo2 from "../../../images/logos/google.png";
import logo3 from "../../../images/logos/uber.png";
import logo4 from "../../../images/logos/netflix.png";
import logo5 from "../../../images/logos/airbnb.png";
import "./CompanyLogo.css";

const CompanyLogo = () => {
  return (
    <Container className="my-5">
      <div className="company_image">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </div>
    </Container>
  );
};

export default CompanyLogo;
