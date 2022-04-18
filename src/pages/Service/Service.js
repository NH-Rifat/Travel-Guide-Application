import React from 'react';
import './Service.css'
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
import {FaStarHalfAlt} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
  // console.log(singleService);
  const { id, img, des, price, previousPrice, name } = service;
  // console.log(img, des, price, previousPrice, name);
  const navigate=useNavigate();
const handleBook=()=>{
  navigate(`/checkout/${id}`)
}
  return (
    <div className='box'>
      <img src={img} alt='' />
      <div className='content'>
        <h3>
          <i><FaMapMarkerAlt></FaMapMarkerAlt></i>{name}
        </h3>
        <p>{des}</p>
        <div className='stars'>
          <i><FaStar></FaStar></i>
          <i><FaStar></FaStar></i>
          <i><FaStar></FaStar></i>
          <i><FaStar></FaStar></i>
          <i><FaStarHalfAlt></FaStarHalfAlt></i>
        </div>
        <div className='price'>
          {' '}
          {price}$ <span>{previousPrice}$</span>{' '}
        </div>
        <button className='btn' onClick={()=>handleBook(id)}>
          Book now
        </button>
      </div>
    </div>
  );
};

export default Service;
