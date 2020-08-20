import React,  { Component } from 'react';
import Geocode from "react-geocode";

class AddressForm extends Component {

    render(){
        return(
            <div>
                <form className="addMarkerFormAddress">
                    <label className="addressLabel">Adress: </label>
                    <input className="addressInput" type="text" placeholder="255 Fishy Road, Fishville, CO 80205"></input>
                    <input className="addressSubmit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddressForm;