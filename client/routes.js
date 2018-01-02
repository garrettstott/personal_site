import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';

import Landing from './components/Landing';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ Landing } />
      <Route path='/about' component={ About } />
      <Route path='/resume' component={ Resume } />
      <Route path='/projects' component={ Projects } />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

