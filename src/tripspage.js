import React, {Component} from 'react';
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
    foundTrips: [],
  };

  componentDidMount() {
    this.fetchLocations();
    this.fetchTrips();
  }

  fetchLocations = () => {
    fetch(`http://localhost:3000/locations/`)
      .then((response) => response.json())
      .then((locations) =>
        this.setLocation(locations[this.props.match.params.locationId - 1])
      );
  };

  fetchTrips = () => {
    fetch('http://localhost:3000/trips/')
      .then((response) => response.json())
      .then((trips) => this.setTrips(trips));
  };

  setLocation = (location) => {
    console.log(location);
    this.setState({locations: location});
    console.log(this.state.locations);
  };

  setTrips = (trips) => {
    this.setState({trips: trips});
    this.setFoundTrips();
  };

  showLocation = () => {
    return <LocationCard location={this.state.locations} />;
  };

  setFoundTrips = () => {
    const urlID = parseInt(this.props.match.params.locationId);
    const allFoundTrips = this.state.trips.filter((foundTrip) => {
      return foundTrip.location_id === urlID;
    });
    this.setState({foundTrips: allFoundTrips});
    this.displayTripCards();
  };

  displayTripCards = () =>
    this.state.foundTrips.map((foundTrip) => {
      return <TripCards trip={foundTrip} />;
    });

  addTrip = (newTrip) => {
    this.setState({
      foundTrips: [...this.state.foundTrips, newTrip],
    });
    const trip = {
      trip: newTrip,
    };
    fetch('http://localhost:3000/trips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trip),
    });
    this.displayTripCards();
  };
  render() {
    const name = this.state.locations.name;
    const upper = () => {
      if (name) {
        return name.toUpperCase();
      }
      return null;
    };

    return (
      <div className='trip-container'>
        <div className='nav-bar'>
          <Navbar />
        </div>
        <div className='trip-main'>
          <h1>WELCOME TO {upper()}</h1>
          <h3 className='location-type'>- {this.state.locations.body} -</h3>
          <div className='location-and-form'>
            <div className='location-card'>{this.showLocation()}</div>
            <div className='addTrip'>
              <h2 className='log'>LOG YOUR TRIP!</h2>
              <TripForm
                location={this.state.locations.id}
                addTrip={this.addTrip}
              />
            </div>
          </div>
        </div>
        <h2 className='pastTrips'>- PAST TRIPS -</h2>
        <div className='pastTripCards'>{this.displayTripCards()}</div>
      </div>
    );
  }
}
export default TripsPage;
