import React, { useContext,useState } from "react";
import { Table, Col, ListGroup } from "react-bootstrap";
import { useProduct } from "../context/ProductContext";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { BsFillArchiveFill, BsFillCartXFill } from "react-icons/bs";
import { FcEmptyFilter } from "react-icons/fc";
import {Link,useNavigate} from "react-router-dom"
import TotalAmount from "./TotalAmount";
import CheckOut from "./CheckOut";
import List from "./List";
function Cart() {
  // get shopping cart array from listcontext

  const { state, increase, decrease } = useProduct();
  const [cartItem, setcartItem] = useState(state.cart);
  
const navigate = useNavigate();
  const listGrp = state.cart.map((i, index) => {
    return <List i={i} index={index} />;
  });

  const checkOut =()=>{
      return (
        navigate('/checkout')
      )
  }
  if (state.cart.length > 0) {
    return (
      <div style={{ padding: "15px" }}>
       <div className="headCart">
       <h2>Welcome to Cart Page</h2>
        <TotalAmount />
       </div>
        <section>
          {listGrp}
        </section>
        <CheckOut checkOut={checkOut} empty={setcartItem}/>
      </div>
    );
  } else {
    return (
      <div className="cartEmpty">
        <p className="cart">
          <BsFillCartXFill color="red" />
          Cart is empty
        </p>
      </div>
    );
  }

  if(state.cart.emptyCart.length == 0){
    
  }
}

//////



export default Cart;
