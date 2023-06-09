import React from 'react';
import "./footer.css";
import {FiInstagram} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';

const Footer = () => {
  return (  
    <footer>
      <a href="#" className='footer__logo'>Zarshoda</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://telegram.com"><FaTelegramPlane /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Zarshoda tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer