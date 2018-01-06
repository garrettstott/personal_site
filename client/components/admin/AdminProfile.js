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
      .then( response => {
        this.setState({
          profile: response.data
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
    let bio = { __html: this.state.profile.bio };
    return(
      <div>
        <h1>Profile</h1>
        <div dangerouslySetInnerHTML={ bio }></div>
        <button onClick={ () => browserHistory.push('/admin/profile/edit') }>
          Edit
        </button>
      </div>
    )
  }
}

export default AdminProfile
