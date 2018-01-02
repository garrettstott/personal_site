import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const App = ({ children }) => (
  <div>
    <div className='wrapper'>
      <NavBar />
      { children }
    </div>
    <Footer />
  </div>
);

export default App;

