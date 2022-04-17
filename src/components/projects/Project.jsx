import React from 'react'
import './project.css'
import contact from '../../assets/contact.PNG'

const Project = () => {
  return (
    <section id='project'>
    <h5>My Recent Works?</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={contact} alt="" />
          </div>
        <h3>Portfolio item title</h3>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={contact} alt="" />
          </div>
        <h3>Portfolio item title</h3>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={contact} alt="" />
          </div>
        <h3>Portfolio item title</h3>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>

      </article>
      
      </div>
    
    
    
    </section>
  )
}

export default Project