import React, { Component } from 'react';
import Navbar from './navbar.js'
import './tripspage.css';
import LocationCard from './components/LocationCard';
import TripsCards from './components/TripsCards';


class TripsPage extends Component {

    state = {
       trips: []  
    }
    
    
    render(){
        return(
        <div className = "main-trip">
            <div className="nav-bar">
                <Navbar />
            </div>

        </div>
    )
    }
    
}
export default TripsPage;
