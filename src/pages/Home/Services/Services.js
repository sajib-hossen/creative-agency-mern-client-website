import React from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
import mobile from "../../../images/icons/service1.png";
import graphic from "../../../images/icons/service2.png";
import development from "../../../images/icons/service3.png";

const services = [
  {
    id: 0,
    name: "Web & Mobile design",
    description:
      "We croft stunning and amazing web UL using a well drafted UX to fit your product",
    img: mobile,
  },
  {
    id: 1,
    name: "Graphic design",
    description:
      "Amazing fiyers social media posts and brand representations that would make your brand stand out",
    img: graphic,
  },
  {
    id: 2,
    name: "Web development",
    description:
      "with well written codes , we build amazing apps for all platforms , mobile and web apps in general",
    img: development,
  },
];

const Services = () => {
  return (
    <Container>
      <h2 className="text-center my-5 fw-bolder">
        Provider awesome <span className="text-success">Services</span>{" "}
      </h2>
      <Row sm={1} md={2} lg={3} className="text-center ms-2">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
