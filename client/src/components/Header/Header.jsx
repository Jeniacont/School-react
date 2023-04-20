import React, { useState } from 'react';
import "./Header.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleNav() {
      setIsOpen(!isOpen);
    }
  
    return (
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <a href="#">Logo</a>
            </div>
            <div className="open-nav" onClick={toggleNav}>
              <span></span>
            </div>
            <div className={`navbar ${isOpen ? 'toggle' : ''}`}>
              <div className="close-nav" onClick={toggleNav}>
                <span></span>
              </div>
              <ul>
                <li><a href="#" className="active">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">team</a></li>
                <li><a href="#">contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }

export default Header;