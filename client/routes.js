import React from 'react';
import { Route, IndexRoute } from 'react-router';

// CONTAINERS
import App from './containers/App';
import Admin from './containers/Admin';

// COMPONENTS
import NoMatch from './components/NoMatch';
import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

// ADMIN COMPONENTS
import AdminHome from './components/admin/AdminHome';
import AdminProjects from './components/admin/AdminProjects';
import AdminExperiences from './components/admin/AdminExperiences';
import AdminExperience from './components/admin/AdminExperience';
import AdminExperienceEdit from './components/admin/AdminExperienceEdit';
import AdminProfile from './components/admin/AdminProfile';
import AdminProfileEdit from './components/admin/AdminProfileEdit';
import AdminProject from './components/admin/AdminProject';
import AdminProjectEdit from './components/admin/AdminProjectEdit';


export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ Landing } />
      <Route path='/about' component={ About } />
      <Route path='/resume' component={ Resume } />
      <Route path='/projects' component={ Projects } />
    </Route>

    <Route path='/admin' component={ Admin } >
      <IndexRoute component={ AdminProjects } />
      <Route path='/admin/projects' component={ AdminProjects } />
      <Route path='/admin/projects/:id' component={ AdminProject } />
      <Route path='/admin/projects/:id/edit' component={ AdminProjectEdit } />
      <Route path='/admin/experiences' component={ AdminExperiences } />
      <Route path='/admin/experiences/:id' component={ AdminExperience } />
      <Route path='/admin/experiences/:id/edit' component={ AdminExperienceEdit } />
      <Route path='/admin/profile' component={ AdminProfile } />
      <Route path='/admin/profile/edit' component={ AdminProfileEdit } />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

