import React from 'react';
import './MoreInfo.css';
import about1 from '../../../images/about1.jpg';
import about2 from '../../../images/about2.jpg';

const MoreInfo = () => {
  return (
    <div>
      <div className='more_info-img'>
        <div className='info-section'>
          <h1>
            More Information <br />
            About the Best Beaches
          </h1>
          <p>
            You can find the most beautiful and pleasant places at the best
            prices with special discounts, you choose the place we will guide
            you all the way to wait, get your place now.
          </p>
          <div className='btn'>
            <a href='#place'>Reserve a Place</a>
          </div>
        </div>
        <div className='info-img'>
          <div className='about1'>
            <img src={about1} alt='' />
          </div>
          <div className='about2'>
            <img src={about2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
