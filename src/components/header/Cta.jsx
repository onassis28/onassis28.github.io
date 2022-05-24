import React from 'react'
import CV from '../../assets/cv.pdf'
import { Link } from 'react-router-dom'

const cta = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <Link to='contact' className='btn '>Let's Talk</Link>


    </div>
  )
}

export default cta