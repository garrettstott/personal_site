import React from 'react';
let axios = require('axios');

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
      experiences: []
    }
  }

  componentDidMount() {
    axios.get('/v1/about')
      .then( response => {
        this.setState({
          bio: response.data.bio
        })
      })
      .catch( error => {
        console.log(error);
      });
    axios.get('/v1/experiences')
      .then( response => {
        this.setState({
          experiences: response.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let bio = { __html: this.state.bio };
    let experiences = this.state.experiences.map( (e, i) => {
      if ( i === 0 ) {
        console.log(e);
      }
      let projects = e.projects.map( (p, i) => {
        let comma;
        if ( (i+1 === e.projects.length ) ) {
          comma = null;
        } else {
          comma = ','
        }
        return(
          <span key={ p.id }>
            <a href={ p.live_url } target='_blank'>
              <b>{ p.name }</b>
            </a>
            { comma }
          </span>
        )
      });
      let description = { __html: e.description }
      return(
        <div key={ e.id }>
          <h2><b>{ e.company }</b>, { e.location }</h2>
          <p>{ e.job_title }, { e.dates }</p>
          <p>{ projects.length > 1 ? 'Projects:' : 'Project:' } { projects }</p>
          <p dangerouslySetInnerHTML={ description }></p>
        </div>
      )
    });
    return(
      <div className='container about-container'>
        <h1 className='page-header'>About</h1>
        <div className='links'>
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
        <div className='bio'>
          <h1>Bio</h1>
          <div dangerouslySetInnerHTML={ bio }></div>
        </div>
        <hr className='hr-fancy'/>
        <div className='experiences'>
          <h1>Experience</h1>
          { experiences }
        </div>
      </div>
    )
  }
}

export default About
