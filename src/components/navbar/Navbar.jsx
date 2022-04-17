import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react'

const Navbar = () => {
  const [active, setActive]= useState('#home')
  return (
    <nav className='nav'>
      <div className='nav__position'>

<a href="#home"onClick={() => setActive('#home')} className={active ==='#home'? 'active': ''}><AiOutlineHome/> </a>
<a href="#about" onClick={() => setActive('#about')}className={active ==='#about'? 'active': ''} ><AiOutlineUser/></a>
<a href="#experience"onClick={() => setActive('#experience')} className={active ==='#experience'? 'active': ''}><BsBook/></a>
<a href="#project"onClick={() => setActive('#project')} className={active ==='#project'? 'active': ''}><AiOutlineProject/></a>
<a href="#contact"onClick={() => setActive('#contact')} className={active ==='#contact'? 'active': ''}><IoIosContact/></a>
</div>


    </nav>
  )
}

export default Navbar