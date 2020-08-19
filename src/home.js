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
                        <a class="tblink" href="/tacklebox">
                            <div className="tbButton" align="center">
                                <p class="tbtext">TackleBox</p>
                            </div>
                        </a>

                </div>
                <div class="button-card" id="button-map">
                    <img class="button-image" src="https://i.imgur.com/215fMsA.jpg" alt="Map"></img>
                    <a class="mapLink" href="/mappage">
                        <div className="mapButton" align="center">
                            <p class="mapText">Map</p>
                        </div>
                    </a>
                </div>
                <div class="button-card" id="button-fish">
                    <img class="button-image" src="https://i.imgur.com/z7FjF2V.jpg" alt="Fish"></img>
                    <a class="fishLink"  href="/fish">
                        <div class="fishButton" align="center">
                            <p class="fishText">Fish-Dex</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
        )
    } 
}
export default Home;


