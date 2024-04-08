import React from 'react';
import './Footer.scss';
import rocketImage from '../../../assets/images/rocket.svg';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <img src={rocketImage} alt='Rocket' className='footer__rocket'/>
        <p>Exciting space adventure!</p>          
      </div>
    </footer>
  );
}

export default Footer;