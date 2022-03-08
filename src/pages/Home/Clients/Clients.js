import React from "react";
import { Container, Row } from "react-bootstrap";
import Client from "../Client/Client";
import "./Clients.css";
import img1 from "../../../images/customer-1.png";
import img2 from "../../../images/customer-2.png";
import img3 from "../../../images/customer-3.png";

const clientdetails = [
  {
    id: 0,
    name: "Nash Patrik",
    company: "CEO, Manpol",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: img1,
  },
  {
    id: 1,
    name: "Miriam Barron",
    company: "CEO, Manpol",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: img2,
  },
  {
    id: 2,
    name: "Bria Malone",
    company: "CEO, Manpol",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: img3,
  },
];

const Clients = () => {
  return (
    <Container>
      <h2 className="text-center my-5 fw-bolder">
        {" "}
        Clients <span className="text-success">Feedback</span>{" "}
      </h2>
      <Row sm={1} md={3} lg={3} className="ms-auto">
        {clientdetails.map((client) => (
          <Client client={client}></Client>
        ))}
      </Row>
    </Container>
  );
};

export default Clients;
