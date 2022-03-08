import React from "react";
import { Card } from "react-bootstrap";
import "./Client.css";

const Client = ({ client }) => {
  const { name, img, company, description } = client;
  return (
    <Card style={{ width: "26rem" }} className="m-2 p-2 ">
      <div className="client">
        <img src={img} alt="" width="80px" className="ms-1" />
        <h4 className="mt-2 ms-3">
          {" "}
          {name} <br /> <span className="fs-6">{company}</span>{" "}
        </h4>
      </div>

      <p> {description} </p>
    </Card>
  );
};

export default Client;
