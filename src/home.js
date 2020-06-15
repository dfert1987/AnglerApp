import React, { Component } from 'react';
import Navbar from './navbar.js';
import './home.css'




class Home extends Component{
    render () {
    return  (
    <div class="main-container">
        <div className="NavBar">
            <Navbar />
        </div>
        <div className="main">
            <div className="welcome-container">
                <h1 className="welcome">WELCOME TO ANGLER</h1>
            </div>
            <div class="button-container">
                <div class="button-card" id="button-tb">
                    <img class="button-image" src="https://i.imgur.com/ppK33JO.jpg" alt="TackleBox"></img>
                    <a class="link"  href="/tacklebox">
                        <button id="tbbutton" class="btn">TackleBox</button>
                    </a>
                </div>
                <div class="button-card" id="button-map">
                    <img class="button-image" src="https://i.imgur.com/215fMsA.jpg" alt="Map"></img>
                    <a class="link" href="/map">
                        <button id="mapbutton" class="btn">Map</button>
                    </a>
                </div>
                <div class="button-card" id="button-fish">
                    <img class="button-image" src="https://i.imgur.com/z7FjF2V.jpg" alt="Fish"></img>
                    <a class="link"  href="/fish">
                        <button id="fishbutton" class="btn">Fish-dex</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
        )
    } 
}
export default Home;


