import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {RiProjectorLine} from 'react-icons/ri';
import {SlGraduation} from "react-icons/sl";
import {RiContactsLine} from "react-icons/ri";
function Nav() {

   const [activeNav,setActiveNav] = useState('#');
    
  return (
    <nav>
        
        <Link className={activeNav === '#' ? 'active' : ''} onClick={()=>setActiveNav('#')}  to='/' >
           < AiOutlineHome />          
        </Link>
        <Link className={activeNav === '#education' ? 'active' : ''} onClick={()=>setActiveNav('#education')} to='/education'>
           < SlGraduation />          
        </Link>
        <Link className={activeNav === '#projects' ? 'active' : ''} onClick={()=>setActiveNav('#projects')} to='/projects ' >
           < RiProjectorLine />          
        </Link>
        <Link className={activeNav === '#contact' ? 'active' : ''} onClick={()=>setActiveNav('#contact')} to='/contact'>
           < RiContactsLine />          
        </Link>
          
          
      
    </nav>
  )
}

export default Nav;
