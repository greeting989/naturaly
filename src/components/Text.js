import React from 'react';
import {Col,Row} from "react-bootstrap";
function Text({content}) {
  return (
    <div>
      <Row>
      <Col className='px-2 py-2'>
          <p className='mx-5'>{content}</p>
       </Col>
      </Row>
    </div>
  )
}

export default Text;