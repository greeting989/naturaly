import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import ImageHolder from "../components/ImageHolder";
import img1 from "../assets/aboutus/img5.jpg";
import img2 from "../assets/aboutus/img6.jpg";
import img3 from "../assets/aboutus/img3.jpg";
import img4 from "../assets/aboutus/img4.jpg";
import video from "../assets/aboutus/production ID_3755951.mp4";
function AboutUs() {
  const videoStyle = {
    width : '80vw'
  }
  return (
    <>
      {/* */}

      <ListGroup>
        <Container>
            <Col>
            <video
                loop
                muted
                autoPlay
                src={video}
                preload={'auto'}
                type={'video/mp4'}
                style={videoStyle}
            >
            </video>
            
            </Col>
        </Container>
        <ListGroup.Item>
          We are a luxurious anti-ageing skincare line that helps you to achieve
          beautiful, healthy skin with 100% natural products harmless to the
          body or nature. We deliver tangible results seen and felt within seven
          days of application requiring no more than 45 seconds twice a day.
          Every active ingredient in our products is included for a specific
          therapeutic reason with a focus on anti ageing, moisturizing as well
          as skin tone maintenance.
          We package our formulas in dark violet glass bottles which keep their
          high quality ingredients intact for a long period of time. Airless
          pumps are used as closures that don't permit bacteria to penetrate
          inside and prevent the formula from oxidation and deterioration. And
          finally, our eco friendly packaging eliminates the need for boxing and
          environmental waste.
        </ListGroup.Item>
        <Container>
        <Row>
          <Col>
            {" "}
            <ImageHolder src1={img1} />
          </Col>
          <Col>
            <ImageHolder src1={img2} />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <ImageHolder src1={img3} />
          </Col>
          <Col>
            <ImageHolder src1={img4} />
          </Col>
        </Row>   
      </Container>
        <ListGroup.Item>
          We pride ourselves on delivering a world class customer service
          experience where we offer complimentary skin care consultations twice
          a week and have the ability to customize our formulas to meet a
          clients unique skin care needs. We are truly passionate about the products we make and we want them to
          be part of your journey into a confident harmonious self by nurturing
          your skin with the best ingredients nature has to offer. Because You
          deserve the best: ingredients, formulas, packaging and services.
        </ListGroup.Item>
        <ListGroup.Item>
         
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default AboutUs;
