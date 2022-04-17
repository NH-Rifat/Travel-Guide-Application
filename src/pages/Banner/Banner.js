import React from 'react';
import './Banner.css';

import home1 from '../../images/home1.jpg';
import home2 from '../../images/home2.jpg';

import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div>
      <div className='banner-img'>
        <img src={home1} alt='' />
      </div>
      <div className='main'>
        <p>Discover Your Place</p>
        <h1>
          Explore The <br />
          Best{' '}
          <b>
            Beautiful <br />
            Beaches
          </b>
        </h1>
        <div className='explore_visit-place'>
          <div className='explore'>
            <a href='#explore'>Explore</a>
            <div className='social'>
              <div className='facebook'>
                <FaFacebookSquare></FaFacebookSquare>
              </div>
              <div className='instagram'>
                <FaInstagramSquare></FaInstagramSquare>
              </div>
              <div className='twitter'>
                <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
          <div className="visit-place">
            <div className="info">
              <p>5 best places <br />to Visit</p>
              <div className="more">
                <p>More</p>
                <div className="arrow">
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="visit-img">
            <img src={home2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
