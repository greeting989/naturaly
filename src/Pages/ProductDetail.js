import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import {BsFillCartCheckFill} from "react-icons/bs";
//import useNavigationState from "@react-navigation/native";
import { useProduct } from "../context/ProductContext";
function ProductDetail() {
  // const data = useNavigationState(state=>state)
  // console.log(data)
  const { state } = useLocation();
  //console.log(state.prodSelect);
  const [prod, setProd] = useState([state.prodSelect]);
  console.log(prod);
  const { addToCart } = useProduct();
  const heading = {
    color: "#736CED",
    fontWeight: "700",
    fontSize: "55px",
  };
  const sunhead = {
    color: "#9F9FED",
    fontWeight: "500",
    fontSize: "20px",
  };
  return (
    <div>
      {prod.map((item, index) => {
        return (
          <Container key={index}>
            <Row>
              <Col>
                <img
                  src={item.image}
                  className="img-thumbnail"
                  alt="productimg"
                  width="440px"
                />
              </Col>
              <Col className="mt-5 p-3">
                <div className="headDiv">
                  <h1 style={heading}>{item.name}</h1>
                  <BsFillCartCheckFill
                    variant="dark"
                    size={80}
                    className="pt-2"
                    onClick={() => addToCart(item)}
                  />
                   
                </div>

                <p className="mt-5" style={sunhead}>
                  {" "}
                  Rs {item.price}/-
                </p>
                <section className="mt-5">
                  <p style={sunhead}>{item.content}</p>
                </section>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
}

export default ProductDetail;
