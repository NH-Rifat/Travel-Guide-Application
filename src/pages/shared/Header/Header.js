import React from 'react';
import './Header.css';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
                <a href='#home' className='nav__link active-link'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                  About
                </a>
              </li>
              <li className='nav__item'>
                <a href='#discover' className='nav__link'>
                  Discover
                </a>
              </li>
              <li className='nav__item'>
                <a href='#place' className='nav__link'>
                  Places
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
