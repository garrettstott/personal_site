import React from 'react';

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

  render() {
    let menu =
      <div className='navbar-menu hidden'>
        <ul>
          <li><a href='/about'>About</a></li>
          <li><a href='/resume'>Resume</a></li>
          <li><a href='/projects'>Projects</a></li>
        </ul>
      </div>;

      let menuIcon;
      if ( this.state.showMenu ) {
        menuIcon = <i className='fa fa-times'>&nbsp;</i>
      } else {
        menuIcon = <i className='fa fa-bars'>&nbsp;</i>
      }
    return(
      <div className='navbar'>
        <a href='/' className='home-link-container'>
          <div className='home-link'><i className='fa fa-glide-g'>&nbsp;</i></div>
        </a>
        <div className='hamburger-container' onClick={ this.toggleMenu }>
          { menuIcon }
          { menu }
        </div>
      </div>
    );
  }
}

export default NavBar;
