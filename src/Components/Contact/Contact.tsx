import './Contact.css';

import React from 'react';

import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { products } from '../../data';

library.add(fas);
const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h3 className="contact-title">Contact</h3>
      <p className="contact-email">
        <FontAwesomeIcon className="faicons" icon="envelope" />
        &nbsp; 4hairbabes@gmail.com
      </p>
      <p>
        <FontAwesomeIcon className="faicons" icon="phone" /> +46-762 134 261
      </p>
      <p>
        <img src="/images/swish.jpg" alt="" /> 0762134261
      </p>

      {products.map((product) => {
        if (product.manual) {
          return (
            <span key={product.slug}>
              <Link to={`/contact/${product.slug}`}>
                <strong>{product.manual}</strong>
              </Link>
            </span>
          );
        }
      })}
    </div>
  );
};
export default Contact;
