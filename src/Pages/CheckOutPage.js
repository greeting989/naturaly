import React from 'react';
import {useUserAuth} from "../context/Auth";
import {Link,useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap';

function CheckOutPage() {
  let {user} = useUserAuth();
  let naviagte= useNavigate();
  const prodPag =()=>{
    return (naviagte('/products'));
  }
  return (
    <div className='checkoutDiv'>
       <h4 style={{color:'gray',fontSize:'2rem'}}>Your cart is empty</h4>{' '}
       <h4 style={{color:'green',fontSize:'1.5rem'}}>Checkout Successful</h4>{' '}
       <Button variant="outline-success" onClick={prodPag}>Buy More</Button>{' '}
    </div>
  )
}

export default CheckOutPage;