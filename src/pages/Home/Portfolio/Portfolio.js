import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Portfolio.css";
import carousel1 from "../../../images/carousel-1.png";
import carousel2 from "../../../images/carousel-2.png";
import carousel3 from "../../../images/carousel-3.png";
import carousel4 from "../../../images/carousel-4.png";
import carousel5 from "../../../images/carousel-5.png";

const Portfolio = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="portfolio">
      <Container>
        <h2
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            margin: "40px 0",
          }}
        >
          {" "}
          Here are some of <span className="text-success">our works </span>{" "}
        </h2>
        <Slider {...settings}>
          <div>
            <img
              src={carousel1}
              className="g-5"
              style={{ width: "300px ", height: "300px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={carousel2}
              className="g-5"
              alt=""
              style={{ width: "300px ", height: "300px" }}
            />
          </div>
          <div>
            <img
              className="g-5"
              src={carousel3}
              style={{ width: "300px ", height: "300px" }}
              alt=""
            />
          </div>
          <div>
            <img
              className="g-5"
              src={carousel4}
              style={{ width: "300px ", height: "300px" }}
              alt=""
            />
          </div>
          <div>
            <img
              className="g-5"
              src={carousel5}
              style={{ width: "300px ", height: "300px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={carousel2}
              style={{ width: "300px ", height: "300px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={carousel4}
              style={{ width: "300px ", height: "300px" }}
              alt=""
            />
          </div>
          <div>
            <img
              src={carousel2}
              style={{ width: "300px ", height: "00px" }}
              alt=""
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Portfolio;
