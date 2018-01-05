import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class AdminProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      experiences: []
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
      });
    axios.get('/v1/admin/experiences')
      .then( data => {
        this.setState({
          experiences: data.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      url: `/v1/admin/project/${ this.props.params.id }`,
      method: 'post',
      data: {
        project: this.state.project
      }
    })
      .then( data => {
        if ( data.data.success ) {
          browserHistory.push(`/admin/projects/${ this.props.params.id }`);
          toastr.success('Saved')
        } else {
          toastr.error(data.data.message);
        }
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let project = this.state.project;
    let experiences = this.state.experiences.map( e => {
      if ( e.id === project.experience_id ) {
        return(
          <option
            key={ e.id}
            value={ e.id }
            selected
          >
            { e.company }
          </option>
        )
      } else {
        return(
          <option
            key={ e.id}
            value={ e.id }
          >
            { e.company }
          </option>
        )
      }

    });
    return(
      <div className='admin-project-container'>
        <h1>Edit Project</h1>
        <form onSubmit={ (e) => this.handleSubmit(e) }>

          <div>
            <label>Name</label>
            <input
              type='text'
              value={ this.state.project.name }
              onChange={ p => this.setState({ project: {...project, name: p.target.value } }) }
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              type='text'
              value={ this.state.project.description }
              onChange={ p => this.setState({ project: {...project, description: p.target.value } }) }
            />
          </div>

          <div>
            <label>Experience</label>
            <select onChange={ p => this.setState({ project: {...project, experience_id: p.target.value } }) }>
              { experiences }
            </select>
          </div>

          <div>
            <label>Live URL</label>
            <input
              type='text'
              value={ this.state.project.live_url }
              onChange={ p => this.setState({ project: {...project, live_url: p.target.value } }) }
            />
          </div>

          <div>
            <label>GitHub URL</label>
            <input
              type='text'
              value={ this.state.project.github_url }
              onChange={ p => this.setState({ project: {...project, github_url: p.target.value } }) }
            />
          </div>

          <div>
            <label>Project Type</label>
            <input
              type='text'
              value={ this.state.project.project_type }
              onChange={ p => this.setState({ project: {...project, project_type: p.target.value } }) }
            />
          </div>

          <div>
            <label>Rank</label>
            <input
              type='text'
              value={ this.state.project.rank }
              onChange={ p => this.setState({ project: {...project, rank: p.target.value } }) }
            />
          </div>

          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default AdminProjectEdit
