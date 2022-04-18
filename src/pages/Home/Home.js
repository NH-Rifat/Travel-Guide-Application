import React from 'react';
import Banner from './Banner/Banner';
import MoreInfo from './MoreInfo/MoreInfo';
import Services from './Services/Services';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MoreInfo></MoreInfo>
      <Services></Services>
    </div>
  );
};

export default Home;