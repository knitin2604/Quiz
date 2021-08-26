import React, { useState } from "react";
import "./Navbar.css";
import {AiOutlineHome} from 'react-icons/ai';
import {IoMdShuffle} from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";
import {FiMail} from "react-icons/fi"
import {BiChevronDown} from 'react-icons/bi';




const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
      
        {/* 1st logo part  
        <div className="logo">
         <img className="logo-img" src={logo} alt="logo"/>
        </div>
        */}

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
            Home
            </li>
            <li>
              
            </li>
            <li>
            Technology 
            </li>
            <li>
            About 

            <BiChevronDown/>

            </li>
            <li>
              Quizes
              < BiChevronDown/>

            </li>
            <li>
              Partner
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
              style={{color:"black"}}
                href=""
                target="">
                <AiOutlineHome className="facebook" />
              </a>
            </li>
            <li>
              <a
               style={{color:"black"}}
                href=""
                target="">
                <FiMail className="mail" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="">
                < IoMdShuffle className="shuffle" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;