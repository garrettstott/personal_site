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
      .then( data => {
        this.setState({ projects: data.data })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let projects = this.state.projects.map( project => {
      return(
        <div className='recent-project-container' key={ project.id }>
          <div className='recent-project-image' style={{ backgroundImage: `url(${ project.image_path }` }}>&nbsp;</div>
          <h2>{ project.name }</h2>
          <p>{ project.description }</p>
          <div className='links-container'>
            <h3>Visit</h3>
            <a href={ project.live_url } target='_blank'><i className='fa fa-globe'>&nbsp;</i></a>
            <a href={ project.github_url } target='_blank'><i className='fa fa-github'>&nbsp;</i></a>
          </div>
        </div>
      )
    });
    return(
      <div className='container recent-projects-container'>
        <h1 className='no-margin-bottom'><a href='/projects'><i className='fa fa-lightbulb-o'>&nbsp;</i>Projects</a></h1>
        <p><i>Recent Projects</i></p>
        { projects }
      </div>
    )
  }
}

export default RecentProjects
