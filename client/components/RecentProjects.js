import React from 'react';
let axios = require('axios');

class RecentProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    }
  }

  componentDidMount() {
    axios.get('v1/recent_projects')
      .then( response => {
        this.setState({ projects: response.data })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let projects = this.state.projects.map( project => {
      let live, github;
      if ( project.live_url ) {
        live = <a href={ project.live_url } target='_blank' title={ `${ project.name }'s Website` }><i className='fa fa-globe'>&nbsp;</i></a>
      } else {
        live = <i className='fa fa-globe' title='Not Available'>&nbsp;</i>
      }

      if ( project.github_url ) {
        github = <a href={ project.github_url } className='shiiiit' target='_blank' title={ `${ project.name }'s Source Code` }><i className='fa fa-github'>&nbsp;</i></a>
      } else {
        github = <i className='fa fa-github' title='Not Available'>&nbsp;</i>
      }
      return(
        <div className='recent-project-container' key={ project.id }>
          <div className='recent-project-image' style={{ backgroundImage: `url(${ project.image_path }` }}>&nbsp;</div>
          <h2>{ project.name }</h2>
          <div className='links'>
            { live }
            { github }
          </div>
        </div>
      )
    });
    return(
      <div className='container projects'>
        <h1><a href='/projects'><i className='fa fa-lightbulb-o'>&nbsp;</i>Projects</a></h1>
        <p><i>Recent Projects</i></p>
        <div className='recent-projects-container'>
          { projects }
        </div>
      </div>
    )
  }
}

export default RecentProjects
