import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';

class AdminProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    axios.get(`/v1/admin/project/${ this.props.params.id }`)
      .then( data => {
        this.setState({
          project: data.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  deleteProject = () => {
    if ( window.confirm(`Delete ${ this.state.project.name }?`) ) {
      axios({
        url: `/v1/admin/project/${ this.state.project.id }/delete`,
        method: 'post'
      })
        .then( data => {
          if ( data.data.success ) {
            browserHistory.push('/admin/projects');
            toastr.success('Deleted');
          } else {
            toastr.error(data.data.message);
          }
        })
        .catch( error => {
          console.log(error);
        })
    }
  };

  render() {
    let project = this.state.project;
    return(
      <div className='admin-project-container'>
        <h1>Project</h1>
        <div className='admin-project'>
          <h2>{ project.name }</h2>
          <p>
            <b>Description</b>
            <br/>
            { project.description || '-' }
          </p>
          <p>
            <b>Experience</b>
            <br/>
            { project.experience_id || '-' }
          </p>
          <p>
            <b>Live URL</b>
            <br/>
            { project.live_url || '-' }
          </p>
          <p>
            <b>GitHub URL</b>
            <br/>
            { project.github_url || '-' }
          </p>
          <p>
            <b>Rank</b>
            <br/>
            { project.rank || '-' }
          </p>
          <p>
            <b>Project Type</b>
            <br/>
            { project.project_type || '-' }
          </p>
        </div>
        <button
          onClick={ () => browserHistory.push(`/admin/projects/${ this.props.params.id }/edit`) }
        >
          Edit
        </button>
        <button
          onClick={ this.deleteProject }
        >
          Delete
        </button>
      </div>
    )
  }
}

export default AdminProject
