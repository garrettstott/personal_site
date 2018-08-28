import React from 'react';
import { browserHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  componentDidUpdate(){
    let menu = document.getElementsByClassName('navbar-menu')[0];
    if ( this.state.showMenu ) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }

  };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  };

  clickLink = (url) => {
    browserHistory.push(url);
    this.setState({
      showMenu: false
    })
  };

  render() {
    let menu =
      <div className='navbar-menu hidden'>
        <ul>
          <li>
            <div onClick={ () => this.clickLink('/') }>
              <span className='icon-container'><i className='fa fa-globe'>&nbsp;</i></span>
              <span className='name-container'>Home</span>
            </div>
          </li>
          <li>
            <div onClick={ () => this.clickLink('/projects') }>
              <span className='icon-container'><i className='fa fa-lightbulb-o'>&nbsp;</i></span>
              <span className='name-container'>Projects</span>
            </div>
          </li>
          <li>
            <div onClick={ () => this.clickLink('/about') }>
              <span className='icon-container'><i className='fa fa-id-card-o'>&nbsp;</i></span>
              <span className='name-container'>About</span>
            </div>
          </li>
          <li>
            <div onClick={ () => this.clickLink('/resume') }>
              <span className='icon-container'><i className='fa fa-file-text-o'>&nbsp;</i></span>
              <span className='name-container'>Resume</span>
            </div>
          </li>
        </ul>
      </div>;
    return(
      <div className='navbar'>
        <a onClick={ () => browserHistory.push('/') } className='home-link-container'>
          <i className='fa fa-glide-g'>&nbsp;</i>
        </a>
        <div className='hamburger-container'>
          <i className='hamburger-button fa fa-bars' onClick={ this.toggleMenu }>&nbsp;</i>
          { menu }
        </div>
      </div>
    );
  }
}

export default NavBar;
