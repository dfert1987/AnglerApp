import React, {Component} from 'react';
import logo from './images/logo.png';
import './navbar.css';

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav>
        <div className='logoBtn'>
          <div className='logo'>
            <img src={logo} className='logo' alt='' />
          </div>
          </div>
          <ul>
            <li>
              <a href='/home'> Home </a>
            </li>
            <li>
              <a href='/tacklebox'> TackleBox </a>
            </li>
            <li>
              <a href='/fish'> FishDex </a>
            </li>
            <li>
              <a href='/MapPage'> Map </a>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;
