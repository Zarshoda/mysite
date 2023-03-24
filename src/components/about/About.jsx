import React from 'react';
import "./about.css";
import Me2 from '../../assets/me2.jpg';
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {TiFolderOpen} from 'react-icons/ti';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="about_me" />
          </div>
        </div>
        <div className="about__contact">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>No Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>No Clients</small>
            </article>
            <article className='about__card'>
              <TiFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>1 project</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat eveniet aliquid. Nulla atque error cupiditate. Ex quisquam esse facilis et cum, distinctio qui beatae dicta architecto harum nemo error.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About