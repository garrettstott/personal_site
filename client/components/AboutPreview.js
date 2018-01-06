import React from 'react';
let axios = require('axios');

class AboutPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
    }
  }

  componentDidMount() {
    axios.get('/v1/bio_preview')
      .then( response => {
        this.setState({
          bio: response.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let bio = { __html: `${ this.state.bio }... <a href='/about'>read more</a>` };
    return(
      <div className='about-preview-container'>
        <h1>
          <a href='/about'><i className='fa fa-id-card-o'>&nbsp;</i>About</a>
        </h1>
        <p dangerouslySetInnerHTML={ bio }></p>
      </div>
    )
  }
}

export default AboutPreview
