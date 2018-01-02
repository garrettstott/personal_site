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
      .then( data => {
        console.log(data);
        this.setState({
          bio: data.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    return(
      <div className='about-preview-container'>
        <h1>
          <a href='/about'><i className='fa fa-id-card-o'>&nbsp;</i>About</a>
        </h1>
        <p>{ this.state.bio }...
          <a href='/about'>read more</a>
        </p>
      </div>
    )
  }
}

export default AboutPreview
