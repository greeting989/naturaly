import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useNavigate } from "react-router-dom";
import ProductDetail from "../Pages/ProductDetail";
import Search from "./Search";

import { useProduct } from "../context/ProductContext";
function CardComp({ products }) {
  //let history = useHistory();
  const navigate = useNavigate();
  const { addToCart } = useProduct();
  const [inputTxt, setInputTxt] = useState("");
  const heading = {
    color: "white",
  };
  const productId = (product) => {
    navigate("/productdetail", { state: { prodSelect: product } });
  };
  let inputHandler = (e) => {
    let result = e.target.value.toLowerCase();
    setInputTxt(result);
  };
  //console.log(inputTxt);
  const searchFilteredData = products.filter((el)=>{
    if(inputTxt===''){
      return el;
    }else{
      return el.name.toLowerCase().includes(inputTxt) ;
    }
  })
  return (
    <div className="">
      <div className="row">
        <div className="searchDiv">
          <input
            type="search"
            placeholder="🔍Search by product name"
            className="searchDiv"
            onChange={inputHandler}
            value={inputTxt}
          />
        </div>
        {searchFilteredData.map((product) => {
          return (
            <div className="col-lg-4 mt-2 ml-4 p-4 productDiv">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image}
                  height="390"
                  onClick={() => productId(product)}
                />
                <Card.Body style={{ backgroundColor: "#D4C1EC" }}>
                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Card.Title style={heading}>{product.name}</Card.Title>
                    <Card.Text style={heading}>Rs {product.price}/-</Card.Text>
                  </div>
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardComp;
