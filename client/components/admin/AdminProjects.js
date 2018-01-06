import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';

class AdminProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: [],
      professional: []
    }
  }

  componentDidMount() {
    axios.get('/v1/admin/projects')
      .then( response => {
        this.setState({
          personal: response.data.personal,
          professional: response.data.professional
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let personal = this.state.personal.map( project => {
      return(
        <a
          onClick={ () => browserHistory.push(`/admin/projects/${ project.id }`) }
          key={ project.id }
        >
          <span>{ project.name }</span>
          <span>{ project.project_type }</span>
          <span>{ project.experience_company }</span>
        </a>
      )
    });
    let professional = this.state.professional.map( project => {
      return(
        <a
          onClick={ () => browserHistory.push(`/admin/projects/${ project.id }`) }
          key={ project.id }
        >
          <span>{ project.name }</span>
          <span>{ project.project_type }</span>
          <span>{ project.experience_company }</span>
        </a>
      )
    });
    return(
      <div className='admin-projects'>
        <h1>Projects</h1>
        <div>
          <h2>Personal</h2>
          { personal }
          <h2>Professional</h2>
          { professional }
        </div>
      </div>
    )
  }
}

export default AdminProjects
