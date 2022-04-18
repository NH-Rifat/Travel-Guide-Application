import React from 'react';
import './Service.css'

const Service = ({service}) => {
  // console.log(singleService);
  const { img, des, price, previousPrice, name } = service;
  // console.log(img, des, price, previousPrice, name);

  return (
    <div className='box'>
      <img src={img} alt='' />
      <div className='content'>
        <h3>
          {' '}
          <i className='fas fa-map-marker-alt'></i> {name}{' '}
        </h3>
        <p>{des}</p>
        <div className='stars'>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='fas fa-star'></i>
          <i className='far fa-star'></i>
        </div>
        <div className='price'>
          {' '}
          {price}<span>{previousPrice}</span>{' '}
        </div>
        <a href='#' className='btn'>
          Book now
        </a>
      </div>
    </div>
  );
};

export default Service;
