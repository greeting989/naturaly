import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BsFillArchiveFill, BsFillCartXFill } from "react-icons/bs";
import { useProduct } from "../context/ProductContext";
function List({ i, index }) {
  const { state, increase, decrease, removeFromCart } = useProduct();
  return (
    <div key={index} className="cartList">
      <div className="cartImg">
        <img src={i.image} alt="cartimg" width={150} height={150} />
      </div>
      <div className="cartName">
        <p>{i.name}</p>
      </div>
      <div className="cartCount">
        <p>
          {i.count}
          <FaArrowUp onClick={() => increase(i.id)} />
          <FaArrowDown onClick={() => decrease(i.id)} />
        </p>
      </div>
      <div className="cartPrice">
        <p>Rs {i.price * i.count} /-</p>
      </div>
      <div className="removeBtn">
        <BsFillArchiveFill
          onClick={() => removeFromCart(i.id)}
          size={25}
          color="red"
        />
      </div>
    </div>
  );
}

export default List;
