import React, { useState } from 'react';
import "./nav.css";
import {BiHome} from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';
import {BiBookAlt} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {MdOutlineContactSupport} from 'react-icons/md';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactSupport /></a>
    </nav>
  )
}

export default Nav