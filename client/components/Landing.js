import React from 'react';

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
        <div className='personal-info'>
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
      </div>
    )
  }
}

export default Landing
