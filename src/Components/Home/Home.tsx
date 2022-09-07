import './Home.css';

import React from 'react';

import { formatCurrency } from '../../utile';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="image-item">
        <img src="/images/mimis-1.jpeg" alt="" className="home-image" />
        <span>Price: {formatCurrency(37.3)}</span>
      </div>

      <div className="image-item">
        <img src="/images/mimis-2.jpeg" alt="" className="home-image" />
        <span>Price: {formatCurrency(18.62)}</span>
      </div>

      <div className="image-item">
        <img src="/images/mimis-3.jpeg" alt="" className="home-image" />
        <span>Price: {formatCurrency(18.62)}</span>
      </div>
    </div>
  );
};

export default Home;
