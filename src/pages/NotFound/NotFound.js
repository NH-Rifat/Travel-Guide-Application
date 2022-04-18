import React from 'react';
import './NotFound.css'

import notFound from '../../images/404-error-page.jpg'

const NotFound = () => {
  return (
    <div>
      <div className="notfound">
      <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;