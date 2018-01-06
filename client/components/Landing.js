import React from 'react';
import RecentProjects from './RecentProjects';
import AboutPreview from './AboutPreview';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container landing-container'>
        <div id='personal-image'>&nbsp;</div>
        <div className='info-bar'>
          Software Developer
        </div>
        <div className='personal-info landing-section-container'>
          <h1>Garrett Stott</h1>
          <p>
            Experienced Software Engineer with a demonstrated history of working in the computer software industry.
            Skilled in AWS, Rails, Ruby, JavaScript, and React. Strong engineering professional graduated from DevPoint Labs.
          </p>
        </div>


        <hr className='hr-fancy'/>

        <div className='landing-section-container'>
          <RecentProjects />
        </div>

        <hr className='hr-fancy'/>

        <div className='landing-section-container'>
          <AboutPreview />
        </div>

        <hr className='hr-fancy'/>

        <div className='landing-section-container'>
          <h1 className='margin-bottom-32'>
            <a href='/resume'>
              <i className='fa fa-file-text-o'>&nbsp;</i>
              Resume
            </a>
          </h1>
          <p>Download my resume</p>
        </div>

      </div>
    )
  }
}

export default Landing
