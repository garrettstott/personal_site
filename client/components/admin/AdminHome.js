import React from 'react';

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='admin-home'>
        <h1>Admin</h1>
        <div>
          <h3><a onClick={ () => browserHistory.push('/admin/projects') }>Projects</a></h3>
          <h3><a onClick={ () => browserHistory.push('/admin/experience') }>Experience</a></h3>
          <h3><a onClick={ () => browserHistory.push('/admin/profile') }>Profile</a></h3>
        </div>
      </div>
    )
  }
}

export default AdminHome
