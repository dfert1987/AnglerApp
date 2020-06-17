import React, { Component } from 'react';
import Navbar from './navbar.js'
import './tripspage.css';
import LocationCard from './components/LocationCard'
// import TripsCards from './components/TripsCards';

class TripsPage extends Component {


    state = {
       trips: [],
       locations: [] 

    }
        componentDidMount(){
        fetch(`http://localhost:3000/locations/${this.props.match.params.locationId}`)
            .then(response => response.json())
            .then(location => this.setLocation(location));
        }

    

    setLocation =(location) => {
        this.setState(
            {locations: location}
          )
        }

    showLocation = () => {
        return <LocationCard location={this.state.locations} />}

        // showLocation= (location) => if(location.id){return <LocationCard location={location} /> }

     


   

    render(){
       
        return(
            
        <div className = "trip container">
            <div className="nav-bar">
                <Navbar />
            </div>
            <div className="trip-main">
                <div className="location-card">    
                </div>
                <div>
                    {this.showLocation()}
                </div>
            </div>
        </div>
    )
    }
    
}
export default TripsPage;
