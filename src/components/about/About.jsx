import React from 'react'
import './about.css'
import ME from '../../assets/mehead.png'
import {BsAward} from 'react-icons/bs'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
<h5>Get to Know</h5>
<h2>About me</h2>
<div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <a href="#home"><img src={ME} alt="my" /></a></div>

    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className="about_card">
          <BsAward className='about__icon'/>
          <h5 >Experience</h5>
          <small>4+ years in the technology industry</small>
          </article>
          <article className="about_card">
          <AiOutlineFundProjectionScreen className='about__icon'/>
          <h5 >Projects</h5>
          <small>8+ completed academic and personal</small>
          </article>
          <article className="about_card">
          <BsAward className='about__icon'/>
          <h5 >Experience</h5>
          <small>4+ years in the technology industry</small>
          </article>
        </div>
        <p>
        I’m Onassis with over 4+ years in the technology industry. 
        A Frontend Engineer/UI/UX Developer with experience building websites and web applications. 
        Passionate about Web Accessibility, Design systems, Serverless Technologies and maintainable systems.
    
        </p>
        <a href="#contact"className='btn '>Let's talk</a>
      </div>
  
  </div>

    </section>
  )
}

export default About