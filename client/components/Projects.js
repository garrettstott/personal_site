import React from 'react';
let axios = require('axios');

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [],
      professional: [],
    }
  }

  componentDidMount() {
    axios.get('/v1/projects')
      .then( data => {
        this.setState({
          personal: data.data.personal,
          professional: data.data.professional,
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let personal = this.state.personal.map( (project, i) => {
      if ( i === 0 ) {
        console.log(project);
      }
      return(
        <div className='project' key={ project.id }>
          <div className='project-image' style={{ backgroundImage: `${ project.image_path }` }}>&nbsp;</div>
          <h2>{ project.name }</h2>
          <div className='links'>
            <a href={ project.github_url } target='_blank'><i className='fa fa-github'>&nbsp;</i></a>
            <a href={ project.live_url } target='_blank'><i className='fa fa-globe'>&nbsp;</i></a>
          </div>
        </div>
      )
    });

    let professional = this.state.professional.map( (project, i) => {
      if ( i === 0 ) {
        console.log(project);
      }
      return(
        <div className='project' key={ project.id }>
          <div className='project-image' style={{ backgroundImage: `${ project.image_path }` }}>&nbsp;</div>
          <h2>{ project.name }</h2>
          <div className='links'>
            <a href={ project.github_url } target='_blank'><i className='fa fa-github'>&nbsp;</i></a>
            <a href={ project.live_url } target='_blank'><i className='fa fa-globe'>&nbsp;</i></a>
          </div>
        </div>
      )
    });
    return(
      <div>
        <h1 className='page-header'>Projects</h1>
        <h1>Professional</h1>
        <div className='projects-container'>
          { professional }
        </div>
        <hr className='hr-fancy'/>
        <h1>Personal</h1>
        <div className='projects-container'>
          { personal }
        </div>
      </div>
    )
  }
}

export default Projects
