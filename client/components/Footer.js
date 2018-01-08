import React from 'react';
let year = new Date().getFullYear();

const Footer = () => (
  <div className='footer'>
    <div>
      <p>&copy; <a href='/admin'>Garrett Stott</a> { year }</p>
    </div>
    <div>
      <a href='https://www.github.com/garrettstott' target='_blank'>
        <i className='fa fa-github'>&nbsp;</i>
      </a>
      <a href='https://www.twitter.com/aegrescovitae' target='_blank'>
        <i className='fa fa-twitter'>&nbsp;</i>
      </a>
      <a href='https://www.garrettstott.com' target='_blank'>
        <i className='fa fa-globe'>&nbsp;</i>
      </a>
      <a href='https://www.linkedin.com/in/garrettstott' target='_blank'>
        <i className='fa fa-linkedin'>&nbsp;</i>
      </a>
    </div>
  </div>
);

export default Footer;
