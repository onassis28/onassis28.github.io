import React from 'react'
import './project.css'
import contact from '../../assets/contact.PNG'
import note from '../../assets/note.PNG'
import portfolio from '../../assets/portfolio.PNG'

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
        <h3>Contact Book</h3>
        <p>Built with HTML, Bootstrap CSS and JavaScript</p>
        <a href="https://github.com/onassis28/contact-app" className='btn' target='_blank'>Github</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={portfolio} alt="" />
          </div>
        <h3>Portfolio Website</h3>
        <p>Built with React and CSS</p>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>

      </article>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={note} alt="" />
          </div>
        <h3>Note Takking App</h3>
        <p>Built with HTML, CSS AND JavaScript</p>
        <a href="https://github.com/onassis28/notetaking-app" className='btn' target='_blank'>Github</a>

      </article>
      
      </div>
    
    
    
    </section>
  )
}

export default Project