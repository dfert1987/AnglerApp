import React,  { Component } from 'react';
import Geocode from "react-geocode";

class LongLatForm extends Component {

    render(){
        return(
            <div>
                <form className="addMarkerFormLongLat">
                    <div className="long-lat-input-row">
                        <label className="longitudeLabel">Longitude: </label>
                        <input className="longitudeInput" type="number" placeholder="39.7392"></input>
                        <label className="latitudeLabel">Latitude: </label>
                        <input className="latitudeInput" type="number" placeholder="104.9903"></input>
                        <input className="longLatSubmit" type="submit"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default LongLatForm;