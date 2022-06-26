import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ImageHolder from "./ImageHolder";
import Text from "./Text";
import {Button} from "react-bootstrap";
function Section({details}) {
  
  return (
    <div>
      {details.map((item, index) => {
        return (
          <Container key={item.id} className="sectionDiv">
            <Row>
            <Col sm={6}><ImageHolder src1={item.src1} /></Col>
            <Col sm={6} className="textCont">
              <Text content={item.content} />
            </Col>  
          </Row>
          
          </Container>
        );
      })}
    </div>
  );
}

export default Section;
