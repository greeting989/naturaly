import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../assets/slider/slide1.jpg";
import slider2 from "../assets/slider/slide2.jpg";
import slider3 from "../assets/slider/slide3.jpg";
function Caraousel() {
    const imgStyle = {
        height : '580px'
    }
  return (
    <>
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h2>Natural Products</h2>
            <p>Made of all natural materials which helps to keep one'skin young</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
            style={imgStyle}
          />

          <Carousel.Caption>
            <h2>Login and Start Shopping</h2>
            <p>Head to the Product section and start the journey</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
            alt="Third slide"
            style={imgStyle}
          />
          <Carousel.Caption>
            <h3>To the young and palpable skin</h3>
            <p>
              Try our products 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Caraousel;
