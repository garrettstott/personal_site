import React from 'react';
import NavBar from '../components/NavBar';

const App = ({ children }) => (
  <div>
    <div className='wrapper'>
      <NavBar />
      { children }
    </div>
  </div>
);

export default App;

