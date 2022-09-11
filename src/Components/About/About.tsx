import './About.css';

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about">
      <h5 className="about-us">
        This website is for your glory hair.
        <br />
        Start your
        <br /> <strong>Hair Growth Journey</strong> with{' '}
        <strong>mimi's cream</strong> !!!
      </h5>
      <img src="/images/mimis-7.jpeg" alt="" className="about-image" />
    </div>
  );
};

export default About;
