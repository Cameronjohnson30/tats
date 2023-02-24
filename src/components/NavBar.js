import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import Gallery from "./Gallery";
import logo from "../assets/img/logo192.png"
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  
const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f]'>
      <div>
        <img src={logo} alt="logo" style={{width: '50px'}} />
      </div>
      {/*menu */}
      <div>
        <ul className=''>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shops</li>
          <li>School</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
     {/*hamburger */}
      <div>
        <FaBars />
      </div>

           {/*mobile menu */}
        <ul>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shops</li>
          <li>School</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
    </div>
    

  );
}
