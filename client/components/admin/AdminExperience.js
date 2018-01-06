import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class AdminExperience extends React.Component {
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
      })
  }

  deleteExperience = () => {
    if ( window.confirm(`Delete ${ this.state.experience.company }?`) ) {
      axios({
        url: `/v1/admin/experience/${ this.state.experience.id }/delete`,
        method: 'post'
      })
        .then( response => {
          if ( response.data.success ) {
            browserHistory.push('/admin/experiences');
            toastr.success('Deleted');
          } else {
            toastr.error(response.data.message);
          }
        })
        .catch( error => {
          console.log(error);
        })
    }
  };

  render() {
    let experience = this.state.experience;
    return(
      <div className='admin-project-container'>
        <h1>Project</h1>
        <div className='admin-project'>
          <h2>{ experience.company }</h2>
          <p>
            <b>Description</b>
            <br/>
            { experience.description || '-' }
          </p>
          <p>
            <b>Location</b>
            <br/>
            { experience.location || '-' }
          </p>
        </div>
        <button
          onClick={ () => browserHistory.push(`/admin/experiences/${ this.props.params.id }/edit`) }
        >
          Edit
        </button>
        <button
          onClick={ this.deleteExperience }
        >
          Delete
        </button>
      </div>
    )
  }
}

export default AdminExperience
