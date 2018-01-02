import React from 'react';
import { browserHistory } from 'react-router';
let axios = require('axios');
import AdminNav from '../components/admin/AdminNav';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: null,
    }
  }

  componentWillMount() {
    axios.get('/v1/admin')
      .then( data => {
        if ( data.data ) {
          this.setState({ admin: data.data })
        }
      })
      .catch( error => {
        console.log(error);
      })
  }

  content = () => {
    if ( this.state.admin !== null) {
      if ( this.state.admin.id ) {
        return(
          <div>
            <AdminNav />
            { this.props.children }
          </div>
        )
      } else {
        window.location.href = '/admin/sign_in'
        return(
          <div></div>
        )
      }
    } else {
      return(
        <div></div>
      )
    }
  };

  render() {
    return(
      this.content()
    )
  }
}

export default Admin
