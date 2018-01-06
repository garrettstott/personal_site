import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class AdminProjectEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {}
    }
  }

  componentDidMount() {
    axios.get(`/v1/admin/experience/${ this.props.params.id }`)
      .then( response => {
        this.setState({
          experience: response.data
        })
      })
      .catch( error => {
        console.log(error);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      url: `/v1/admin/experience/${ this.props.params.id }`,
      method: 'post',
      data: {
        experience: this.state.experience
      }
    })
      .then( response => {
        if ( response.data.success ) {
          browserHistory.push(`/admin/experiences/${ this.props.params.id }`);
          toastr.success('Saved')
        } else {
          toastr.error(response.data.message);
        }
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let experience = this.state.experience;
    return(
      <div className='admin-project-container'>
        <h1>Edit Experience</h1>
        <form onSubmit={ (e) => this.handleSubmit(e) }>

          <div>
            <label>Company</label>
            <input
              type='text'
              value={ this.state.experience.company }
              onChange={ p => this.setState({ experience: {...experience, company: p.target.value } }) }
            />
          </div>

          <div>
            <label>Description</label>
            <textarea
              type='text'
              value={ this.state.experience.description }
              onChange={ p => this.setState({ experience: {...experience, description: p.target.value } }) }
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type='text'
              value={ this.state.experience.location }
              onChange={ p => this.setState({ experience: {...experience, location: p.target.value } }) }
            />
          </div>

          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default AdminProjectEdit

