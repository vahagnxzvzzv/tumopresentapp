import React from "react";
import  './Navbar.css';
import {useState, useEffect} from 'react'

function Navbar({solarSystemScroll, galaxyScroll}) {
  
  console.log(galaxyScroll);

  return (
    <nav className='navbar'>
      <a href="/" className='logoLink'>Space</a>
      <div className='dividerNavbar'>
      <a href="#">About Earth</a>
      <a onClick={galaxyScroll} href="#">Our Galaxy</a>
      <a onClick={solarSystemScroll} href="#">Solar System</a>
      </div>
    </nav>
  )
}

export default Navbar;