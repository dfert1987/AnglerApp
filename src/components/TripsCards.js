import React, { Component } from 'react'
import TargetSpecies from './TargetSpecies'
import BestLure from './BestLure'


class TripsCards extends Component {
 
    onClose = e => {
        this.props.show = false
      };
 
    render() {
        if(!this.props.show == true){
            return null;
        }
        const fishID = this.props.trip.fish_id
        const lureID = this.props.trip.lure_id
    
     
    return (
        <div className="trips-card">
            <div className="trip-wrapper">
                <h4 className="date">Trip: {this.props.trip.date}</h4>
                <div className="species">
                    <h4 className="speciesHeader">TARGETED SPECIES:</h4>
                    <div className="speciesNameContainer"> 
                        <TargetSpecies 
                        fishID = {fishID}
                        /> 
                    </div>
                    
                </div>

                <div className="content">
                    <p className="time">STARTING TIME: {this.props.trip.time_start}</p>
                    <p className="duration"> HOURS FISHED: {this.props.trip.duration}</p>
                    <p className="weather">WEATHER: {this.props.trip.weather}</p>
                    <p className="temperature">TEMPERATURE: {this.props.trip.temperature}</p>
                    <p className="trip-description">DESCRITPION: {this.props.trip.description}</p>
                    <BestLure
                    lureID = {lureID}
                     />
                    <button class="closeButton"
                        onClick={
                        this.onClose()
                        }
                    >
                    Close
                    </button>
                </div>
            </div>
        </div>
        )
    }
}

export default TripsCards;
