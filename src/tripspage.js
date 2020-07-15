import React, { Component } from 'react';
import Navbar from './navbar.js'
import './tripspage.css';
import LocationCard from './components/LocationCard'
import TripsCards from './components/TripsCards';
import TripForm from './components/TripForm';

class TripsPage extends Component {


    state = {
       trips: [],
       locations: [] 

    }
    componentDidMount(){
        this.fetchLocations()
        this.fetchTrips()
    }

    fetchLocations = () => {
        fetch(`http://localhost:3000/locations/${this.props.match.params.locationId}`)
            .then(response => response.json())
            .then(location => this.setLocation(location));
        }
    
    fetchTrips = () => {
        fetch('http://localhost:3000/trips/')
            .then(response => response.json())
            .then(trips => this.setTrips(trips));
        
    }

    setLocation =(location) => {
        this.setState(
            {locations: location}
          )
        }
    
    setTrips = (trips) => {
        this.setState(
            {trips: trips}
        
        )
        console.log(this.state.trips)
    }

    showLocation = () => {
        return <LocationCard location={this.state.locations} />
    }
    
    showTrips = () => {
        const urlID = parseInt(this.props.match.params.locationId)
        const foundTrip = this.state.trips.find(trip => {
            return trip.location_id === urlID
        })
        if(foundTrip) {
        return <TripsCards trip={foundTrip}/>
        }

    }
    
    render(){
    return(  
        <div className = "trip container">
            <div className="nav-bar">
                <Navbar />
            </div>
            <div className="trip-main">
                <div className="location-card"> 
                    {this.showLocation()}  
                </div>
                <div>
                    {this.showTrips()}
                    <div className="addTrip">
                        <TripForm />
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
}
export default TripsPage;
