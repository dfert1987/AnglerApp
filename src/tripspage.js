import React, { Component } from 'react';
import Navbar from './navbar.js'
import './tripspage.css';
import LocationCard from './components/LocationCard'
import TripsCards from './components/TripsCards';
import TripForm from './components/TripForm';

class TripsPage extends Component {


    state = {
       trips: [],
       locations: [],
       show: false
    }
    
    componentDidMount(){
        this.fetchLocations()
        this.fetchTrips()
    }

    fetchLocations = () => {
        fetch(`http://localhost:3000/locations/${this.props.match.params.locationId}`)
            .then(response => response.json())
            .then(location => this.setLocation(location)
            )
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
    }

    showLocation = () => {
        console.log(this.state.locations)
        return <LocationCard location={this.state.locations} />
        
    }
    
    showTrips = () => {
        const urlID = parseInt(this.props.match.params.locationId)
        const foundTrip = this.state.trips.find(trip => {
            return trip.location_id === urlID
        })
        if(foundTrip) {
        return(
            <div className="tripWithModal">
                <div className="tripNoModal">
                <h3 className="tripDate">{foundTrip.date}</h3>
                <button className="tripButton" onClick={e => {
                    this.showModal();
                }}
                > Show/Hide Details</button>
                </div>
                <TripsCards 
                    trip={foundTrip}
                    show={this.state.show}     
                />
            </div>
            )
        }
    }

    showModal = e => {
        if(this.state.show === false){
            this.setState({
                show: true
            })
        } else {
            this.setState({
                show: false
            })
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
                <h2 className="pastTrips">- PAST TRIPS-</h2>
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
