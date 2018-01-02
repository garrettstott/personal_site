import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';

class AdminNav extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    axios.post('/admin/sign_out')
      .then( () => {
        browserHistory.push('/');
      })
      .catch( error => {
        console.log(error);
      })
  };

  render() {
    return(
      <div>
        AdminNav
        <a onClick={ this.logout }>Logout</a>
      </div>
    )
  }
}

export default AdminNav
