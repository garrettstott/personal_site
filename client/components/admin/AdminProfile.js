import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';

class AdminProfile extends React.Component {
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

  render() {
    return(
      <div>
        <h1>Profile</h1>
        <p>{ this.state.profile.bio }</p>
        <button onClick={ () => browserHistory.push('/admin/profile/edit') }>
          Edit
        </button>
      </div>
    )
  }
}

export default AdminProfile
