import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jfif';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jfif';
import IMG4 from '../../assets/portfolio4.webp';
import IMG5 from '../../assets/portfolio5.webp';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project 1',
    github: 'https://hithub.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project 2',
    github: 'https://hithub.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project 3',
    github: 'https://hithub.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 4',
    github: 'https://hithub.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Project 5',
    github: 'https://hithub.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Project 6',
    github: 'https://hithub.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='#portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio