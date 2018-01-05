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
      let live, github;
      if ( project.live_url ) {
        live = <a href={ project.live_url } target='_blank' title={ `${ project.name }'s Website` }><i className='fa fa-globe'>&nbsp;</i></a>
      } else {
        live = <i className='fa fa-globe' title='Not Available'>&nbsp;</i>
      }

      if ( project.github_url ) {
        github = <a href={ project.github_url } target='_blank' title={ `${ project.name }'s Source Code` }><i className='fa fa-github'>&nbsp;</i></a>
      } else {
        github = <i className='fa fa-github' title='Not Available'>&nbsp;</i>
      }
      return(
        <div className='project' key={ project.id }>
          <div className='project-image' style={{ backgroundImage: `${ project.image_path }` }}>&nbsp;</div>
          <h2>{ project.name }</h2>
          <p>{ project.description }</p>
          <div className='links'>
            { live }
            { github }
          </div>
        </div>
      )
    });

    let professional = this.state.professional.map( (project, i) => {
      let live, github;
      if ( project.live_url ) {
        live = <a href={ project.live_url } target='_blank' title={ `${ project.name }'s Website` }><i className='fa fa-globe'>&nbsp;</i></a>
      } else {
        live = <i className='fa fa-globe' title='Not Available'>&nbsp;</i>
      }

      if ( project.github_url ) {
        github = <a href={ project.github_url } target='_blank' title={ `${ project.name }'s Source Code` }><i className='fa fa-github'>&nbsp;</i></a>
      } else {
        github = <i className='fa fa-github' title='Not Available'>&nbsp;</i>
      }
      return(
        <div className='project' key={ project.id }>
          <div className='project-image' style={{ backgroundImage: `${ project.image_path }` }}>&nbsp;</div>
          <h2>{ project.name }</h2>
          <p>{ project.description }</p>
          <div className='links'>
            { live }
            { github }
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
