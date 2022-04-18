import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user]  =useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
}

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
                <Link to='/home'>Home</Link>
              </li>
              <li className='nav__item'>
                <a href='#place' className='nav__link'>
                  Service
                </a>
              </li>
              <li className='nav__item'>
                <Link to='/about'>About</Link>
              </li>
              <li className='nav__item'>
                <Link to='/blog'>Blog</Link>
              </li>
              {
                user?
                <>
                <li className='nav__item' onClick={handleSignOut}>
                <Link to='/login'>Log out</Link>
              </li>
                </>:
                <li className='nav__item'>
                <Link to='/login'>Login</Link>
              </li>
              }
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
