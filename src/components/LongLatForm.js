import React,  { Component } from 'react';
import Geocode from "react-geocode";

Geocode.setLanguage("en")
Geocode.setRegion("US")

class LongLatForm extends Component {

    state = {
        longitude: 0,
        latitude: 0,
        show: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.showStateChange()
    }

    showStateChange = () => {
        this.setState({
            show: true
        })
    } 

    render(){
        return(
            <div>
                <form className="addMarkerFormLongLat" onSubmit={this.handleSubmit}>
                    <div className="long-lat-input-row">
                        <label className="longitudeLabel">Longitude: </label>
                        <input className="longitudeInput" type="number" name="longitude" placeholder="39.7392" value={this.state.longitude} onChange={this.handleChange}></input>
                        <label className="latitudeLabel">Latitude: </label>
                        <input className="latitudeInput" type="number" name="latitude" placeholder="104.9903" value={this.state.latitude} onChange={this.handleChange}></input>
                        <input className="longLatSubmit" type="submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default LongLatForm;