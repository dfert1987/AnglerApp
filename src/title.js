import React, {Component} from 'react';
import './title.css'
import Navbar from './navbar.js'
import fishicon from './images/fish.png';

class Title extends Component {
  render() {
  return  (
    <div className="landing-container">
      <Navbar />
      <h3 className="welcome-to">Welcome to</h3>
      <h1 className="Title">ANGLER</h1>
      <h4 className="subtitle"> - LOG EVERY CAST - </h4>
      <section className="button-section">
        <a href="/home">
          <button className="enter-button">Enter </button>
        </a>
        <img className="fish" src={fishicon}/>
      </section>
    </div>
  )
}}
export default Title;





