import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

import React from 'react';

import { Container } from 'react-bootstrap';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Container>
        <h1 className="text-center">Share with us your hair picture</h1>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icons-white">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Container>
    </div>
  );
};

export default Footer;
