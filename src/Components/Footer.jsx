import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', position: 'fixed', bottom: '0', width: '100%' }}>
        <a style={{marginLeft:'10px',color:'white'}}href="https://www.facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} /> 
        </a>
        <a style={{marginLeft:'10px',color:'white'}}href="https://www.twitter.com" target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a style={{marginLeft:'10px',color:'white'}}href="https://www.instagram.com" target='_blank'>
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
        <a style={{marginLeft:'10px',color:'white'}}href="https://www.gmail.com" target='_blank'>
          <FontAwesomeIcon icon={faGoogle} /> 
        </a>
        <div>© 2024 Menna Raslan. All Rights Reserved.</div>
      </footer>
    </>
  )
}

export default Footer;
