import React from 'react';
import './Checkout.css';
import bookImg from '../../images/book-img.svg';

const Checkout = () => {
  return (
    <div className='book-container'>
    <h1 class="heading">
        <span>b</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span class="space"></span>
        <span>n</span>
        <span>o</span>
        <span>w</span>
    </h1>
      <div className='booking'>
        <div className='book-img'>
          <img src={bookImg} alt='' />
        </div>
        <div className='form-container'>
          <form action=''>
            <div className='info'>
              <h3>Where to</h3>
              <input type='text' placeholder='Place name' />
            </div>
            <div className='info'>
              <h3>how many</h3>
              <input type='number' placeholder='number of guests' />
            </div>
            <div className='info'>
              <h3>arrivals</h3>
              <input type='date' />
            </div>
            <div className='info'>
              <h3>leaving</h3>
              <input type='date' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
