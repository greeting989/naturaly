import React from 'react';
import {data} from "../data/data";
import CardComp from '../components/Card';

function Product() {
  return (
    <div>
      
      <CardComp products={data}/>
    </div>
  )
}

export default Product;