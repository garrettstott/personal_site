import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const NoMatch = ({ children }) => (
  <div>
    <div className='wrapper'>
      <NavBar />
      <div className='no-match-container'>
        <h1>404</h1>
        <p>Oops! It looks like the page you're looking for doesn't exist.</p>
        <p>Please use the back button or the navigation to leave this page.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default NoMatch;

