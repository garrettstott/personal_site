import React from 'react';
let axios = require('axios');
import { browserHistory } from 'react-router';

class AdminExperiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: []
    }
  }

  componentDidMount() {
    axios.get('/v1/admin/experiences')
      .then( data => {
        this.setState({
          experiences: data.data
        })
      })
      .catch( error => {
        console.log(data);
      })
  }

  render() {
    let experiences = this.state.experiences.map( e => {
      return(
        <a
          onClick={ () => browserHistory.push(`/admin/experiences/${ e.id }`) }
          key={ e.id }
        >
          { e.company }
        </a>
      )
    });
    return(
      <div className='admin-projects'>
        <h1>Experience</h1>
        <div>
          { experiences }
        </div>
      </div>
    )
  }
}

export default AdminExperiences
