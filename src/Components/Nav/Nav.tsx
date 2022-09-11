import './Nav.css';

import React from 'react';

import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/images/mimis-9.jpeg" alt="" className="img-hair" />
        <h1 className="products">Products</h1>
      </Link>
      <div className="nav-links">
        <Link to="/about">
          <h1 className="about-mimis-hair">About</h1>
        </Link>
        <Link to="/contact">
          <h1>
            <FontAwesomeIcon
              className="fas-solid fa-address-card"
              icon="address-card"
            />
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
