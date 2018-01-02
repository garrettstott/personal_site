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
          something <i>//</i> something
        </div>
        <div className='personal-info landing-section-container'>
          <h1>Garrett Stott</h1>
          <p>
            Some personal info Some personal info
            Some personal info Some personal info
            Some personal info Some personal info
            Some personal info Some personal info
            Some personal info Some personal info
            Some personal info Some personal info
            Some personal info Some personal info
            Some personal info Some personal info
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra erat feugiat enim condimentum, vitae pellentesque dui consequat. Cras a rhoncus nisi, in ultrices justo. Maecenas maximus augue rhoncus leo auctor, eget tincidunt dui pharetra. Nulla volutpat a urna at feugiat. Nunc luctus egestas metus eget pretium. Nunc ante turpis, suscipit ut diam sed, consequat consectetur ligula. Donec accumsan, enim id luctus finibus, odio.</p>
        </div>

      </div>
    )
  }
}

export default Landing
