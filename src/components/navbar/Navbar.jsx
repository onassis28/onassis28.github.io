import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {useState} from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive]= useState('#home')
  return (
    <nav className='nav'>
      <div className='nav__position'>

<Link to='/' onClick={() => setActive('#home')} className={active ==='#home'? 'active': ''}><AiOutlineHome/> </Link>
<Link to='about'onClick={() => setActive('#about')}className={active ==='#about'? 'active': ''} ><AiOutlineUser/></Link>
<Link to='experience'onClick={() => setActive('#experience')} className={active ==='#experience'? 'active': ''}><BsBook/></Link>
<Link to='project' onClick={() => setActive('#project')} className={active ==='#project'? 'active': ''}><AiOutlineProject/></Link>
<Link to='contact' onClick={() => setActive('#contact')} className={active ==='#contact'? 'active': ''}><IoIosContact/></Link>
</div>


    </nav>
  )
}

export default Navbar