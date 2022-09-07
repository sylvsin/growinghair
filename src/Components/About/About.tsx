import './About.css';

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about">
      <h4 className="about-us">This website is for your glory hair.</h4>
      <span className="about-us">
        Start your <strong>Hair Growth Journey</strong> with{' '}
        <strong>mimi's Hair oil grow</strong> !!!
      </span>
      <img src="/images/mimis-7.jpeg" alt="" className="about-image" />
    </div>
  );
};

export default About;
