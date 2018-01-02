import React from 'react';
let year = new Date().getFullYear();

const Footer = () => (
  <div className='footer'>
    <div>
      <p>&copy; Garrett Stott { year }</p>
    </div>
    <div>
      <a href='https://www.github.com' target='_blank'>
        <i className='fa fa-github'>&nbsp;</i>
      </a>
      <a href='https://www.twitter.com' target='_blank'>
        <i className='fa fa-twitter'>&nbsp;</i>
      </a>
      <a href='https://www.garrettstott.com' target='_blank'>
        <i className='fa fa-globe'>&nbsp;</i>
      </a>
    </div>
  </div>
);

export default Footer;
