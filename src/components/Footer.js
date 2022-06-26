import React from 'react';
import {Container} from "react-bootstrap"
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai';

function Footer() {
  return (
    <Container fluid className='footer'>
      <div className='footItem d-flex justify-content-between'>
        <div className="fcpy">
            <p>Copyright © 2022 Naturaly</p>
        </div>
      
        <div className='socials'>
            <AiOutlineFacebook size={25}/>
            <AiOutlineInstagram size={25}/>
            <AiOutlineTwitter size={25}/>
        </div>   
      </div>
    </Container>
  )
}

export default Footer;