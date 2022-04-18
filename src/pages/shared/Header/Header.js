import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <nav className='nav container'>
          <div className='logo'>
            <a href='#home' className='nav__logo'>
              Travel
            </a>
          </div>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
              <Link to="/home">Home</Link>
              </li>
              <li className='nav__item'>
                <a href='#place' className='nav__link'>
                  Service
                </a>
              </li>
              <li className='nav__item'>
                <Link to="/about">About</Link>
              </li>
              <li className='nav__item'>
              <Link to="/blog">Blog</Link>
              </li>
              <li className='nav__item'>
              <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
