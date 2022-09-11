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
      <div className="contact-email">
        <FontAwesomeIcon className="faicons" icon="envelope" />
        &nbsp; 4hairbabes@gmail.com
      </div>
      <div>
        <FontAwesomeIcon className="faicons" icon="phone" /> +46-762 134 261
      </div>
      <div>
        <img src="/images/swish.jpg" alt="" /> 0762134261
      </div>
      <div>
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
          return product.manual;
        })}
      </div>
    </div>
  );
};
export default Contact;
