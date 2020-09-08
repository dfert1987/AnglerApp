import React, { Component } from 'react';
import Navbar from './navbar.js';
import './tripspage.css';
import LocationCard from './components/LocationCard';
import TripForm from './components/TripForm';
import TripCards from './components/TripCards';

class TripsPage extends Component {

    state = {
       trips: [],
       locations: [],
       show: false,
       foundTrips: []
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
        this.setFoundTrips()
    }

    showLocation = () => {
        return <LocationCard location={this.state.locations} />
    }
    
    setFoundTrips = () => {
        const urlID = parseInt(this.props.match.params.locationId)
        const allFoundTrips = this.state.trips.filter(foundTrip => {
        return foundTrip.location_id === urlID
        })
        this.setState(
            { foundTrips: allFoundTrips }
        )
        this.displayTripCards()
    }

    displayTripCards = () => this.state.foundTrips.map(foundTrip => {
        return( <TripCards trip={foundTrip} />)})

    addTrip = (newTrip) => {
        this.setState({
            foundTrips: [...this.state.foundTrips, newTrip]
        })
        const trip = {
            trip: newTrip
        }
        fetch('http://localhost:3000/trips', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trip) 
        })
        this.displayTripCards()
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
                    <h2 className="pastTrips">- PAST TRIPS -</h2>
                    <div className="pastTripCards">
                        {this.displayTripCards()}
                        <div className="addTrip">
                            <TripForm 
                                location={this.state.locations.id}
                                addTrip={this.addTrip}
                            />
                        </div>
                    </div>
                </div>
            </div>
            )
        }  
    }
export default TripsPage;