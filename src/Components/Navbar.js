import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../assets/enaam_logo.png'; 
import backgroundImage from '../assets/backrgound_top.png';
import HeroSectionScreen from '../Userside/Homescreen/pages/HeroSectionScreen';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapse

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsCollapsed(true); // Close the navbar when a link is clicked
  };

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle the collapse state
  };

  return (


<div
      className="navbar-section-container"
     
    >
<nav className="navbar mt-1 navbar-expand-lg navbar-light bg-light">
      <div className="container">

        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" style={{ width:'140px', height: '70px' }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                href="#"
                onClick={() => handleLinkClick('Home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Prizes' ? 'active' : ''}`}
                href="#"
                onClick={() => handleLinkClick('Prizes')}
              >
                Prizes
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Winners' ? 'active' : ''}`}
                href="#"
                onClick={() => handleLinkClick('Winners')}
              >
                Winners
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Tickets' ? 'active' : ''}`}
                href="#"
                onClick={() => handleLinkClick('Tickets')}
              >
                Tickets
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Draws' ? 'active' : ''}`}
                href="#"
                onClick={() => handleLinkClick('Draws')}
              >
                Draws
              </a>
            </li>
          </ul>
          <button style={{borderRadius:'10px', width:'100px'}} className="btn btn-primary ms-3 " type="button">Login</button>
        </div>
      </div>
    </nav>

    <section className="below-navbar-section" style={{ minHeight: '6  00px' ,marginTop:'-25px'}}>
    <HeroSectionScreen />
      </section>


    </div>
  );
};

export default Navbar;
