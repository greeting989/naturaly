import React from "react";
import { useProduct } from "../context/ProductContext";

function TotalAmount() {
  const { state } = useProduct();
  //console.log(...state.cart);
  const total = state.cart
    .reduce((prev, curr) => {
      return prev + curr.price * curr.count;
    }, 0)
    .toFixed(2);
  return (
    <div>
      <div className="totalAmt">
        <h4>Total : Rs {total}/-</h4>
      </div>
    </div>
  );
}

export default TotalAmount;
