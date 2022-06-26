import React from 'react';
import {useProduct} from "../context/ProductContext";

function CheckOut({checkOut,empty}) {
  const { state, emptyCart} = useProduct();
  const wrap =() =>{
    checkOut();
    emptyCart();
  }
  return (
    <div style={{'display':'flex','justifyContent':'flex-end','marginTop':'1rem'}}>
        <button className="button-86" onClick={wrap}>
          Check Out
        </button>
    </div>
  )
}

export default CheckOut;