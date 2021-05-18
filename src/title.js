import React, {Component} from 'react';
import './title.css';
import Navbar from './navbar.js';
import fishicon from './images/fish.png';

class Title extends Component {
  render() {
    return (
      <div className='landing-container'>
        <Navbar />
        <div className='title-container'>
          <h3 className='welcome-to'>WELCOME TO</h3>
          <h1 className='title'>ANGLER</h1>
          <h4 className='subtitle'> - LOG EVERY CAST - </h4>
          <div className='button-container'>
            <a href='/home'>
              <button className='enter-button'>
                Enter
                <div className='inner-button-container'>
                  <img className='fish' src={fishicon} alt='fish icon' />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Title;
