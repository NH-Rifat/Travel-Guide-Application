import React from 'react';
import './services.css';
import image1 from '../../../images/p-1.jpg';
import image2 from '../../../images/p-2.jpg';
import image3 from '../../../images/p-3.jpg';
import image4 from '../../../images/p-4.jpg';
import image5 from '../../../images/p-5.jpg';
import image6 from '../../../images/p-6.jpg';

import Service from '../../Service/Service';

let allServices=[
  {
    id:1,
    img:image1,
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!',
    price:90,
    previousPrice:130,
    name:'Mumbai'
  },
  {
    id:2,
    img:image2,
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!',
    price:110,
    previousPrice:150,
    name:'Hawaii'
  },
  {
    id:3,
    img:image3,
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!',
    price:80,
    previousPrice:110,
    name:'Sydney'
  },
  {
    id:4,
    img:image4,
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!',
    price:60,
    previousPrice:90,
    name:'Paris'
  },
  {
    id:5,
    img:image5,
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!',
    price:70,
    previousPrice:120,
    name:'Tokyo'
  },
  {
    id:6,
    img:image6,
    des:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!',
    price:50,
    previousPrice:75,
    name:'Eypt'
  }
]

const Services = () => {
  return (
    <div className='services-container'>
      <section className='packages' id='packages'>
        <h1 className='heading'>
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </h1>

        <div className="box-container">
          {
            allServices.map(service=>
              // console.log(service)
              <Service
              key={service.id}
              service={service}
              ></Service>
            )
          }
        </div>
      </section>
    </div>
  );
};


export default Services;

