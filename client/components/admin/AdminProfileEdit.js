import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class AdminProfileEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {}
    }
  }

  componentDidMount() {
    axios.get('/v1/admin/profile')
      .then( data => {
        this.setState({
          profile: data.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      url: `/v1/admin/profile/${ this.state.profile.id }`,
      method: 'post',
      data: {
        profile: this.state.profile
      }
    })
      .then( data => {
        if ( data.data.success ) {
          browserHistory.push('/admin/profile');
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
    let profile = this.state.profile;
    return(
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <div>
            <label>Bio</label>
            <textarea
              onChange={ p => this.setState({ profile: { ...profile, bio: p.target.value } }) }
              value={ profile.bio }
            />
          </div>
          <input type='submit' value='save' />
        </form>
      </div>
    )
  }
}

export default AdminProfileEdit
