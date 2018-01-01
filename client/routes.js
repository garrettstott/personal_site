import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';

import Landing from './components/Landing';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ Landing } />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

