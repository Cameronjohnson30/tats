import React from 'react';
import { useState } from "react";
import logo from "../assets/img/logo192.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';


export const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#cf1616] text-black-500'>
      <div>
        <img src={logo} alt="logo" style={{width: '200px'}} />
      </div>
      {/*menu */}

        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Gallery</li>
          <li>Shops</li>
          <li>School</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>

     {/*hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaBars />}
      </div>

           {/*mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>Gallery</li>
          <li className='py-6 text-4xl'>Shops</li>
          <li className='py-6 text-4xl'>School</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Contact</li>
        </ul>
           {/*social menu */}
           <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='/'>
                  Face <FaFacebook  size={30} /></a>
                
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-20px] duration-300 bg-[#cf1616]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='/'>
                  .<FaInstagram  size={30} /></a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

            </ul>
           </div>
    </div>
  );
}

export default NavBar;