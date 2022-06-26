import React from 'react'
import { Card,Image } from 'react-bootstrap';

function ImageHolder({src1}) {
 
  return (
    <div className=''>
        <img src={src1} height="350" width="350" style={{padding:'1rem'}}/>
    </div>
  )
}

export default ImageHolder; 