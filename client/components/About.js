import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1 className='page-header'>About</h1>
        <div>
          <a href='https://www.github.com/garrettstott' target='_blank'>
            <i className='fa fa-github'>&nbsp;</i>
          </a>
          <a href='https://www.twitter.com/aegrescovitae' target='_blank'>
            <i className='fa fa-twitter'>&nbsp;</i>
          </a>
          <a href='https://www.linkedin.com/in/garrettstott' target='_blank'>
            <i className='fa fa-linkedin'>&nbsp;</i>
          </a>
        </div>
      </div>
    )
  }
}

export default About
