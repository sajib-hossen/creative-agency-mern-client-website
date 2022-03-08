import React from "react";
import { Card } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  const { name, description, img } = props.service;
  return (
    <Card
      style={{ width: "26rem" }}
      className="m-2 p-3  service_card  mb-5 bg-body rounded border-0"
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "80px", margin: "0 auto" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
