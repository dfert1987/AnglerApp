import React,  { Component } from 'react';
import Geocode from "react-geocode";

Geocode.setLanguage("en")
Geocode.setRegion("us")
Geocode.setApiKey("AIzaSyDYaZrPGmzfTjvWMW9uQAeJopq1UflPhvw") 

class AddressForm extends Component {

    state = {
        address:""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.convertAddress()
    }

    convertAddress = () => {
        Geocode.fromAddress(this.state.address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
              }
        )
    }

    render(){
        return(
            <div>
                <form className="addMarkerFormAddress" onSubmit={this.handleSubmit}>
                    <label className="addressLabel">Adress: </label>
                    <input className="addressInput" type="text" name="address" placeholder="255 Fishy Road, Fishville, CO 80205" onChange={this.handleChange}></input>
                    <input className="addressSubmit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default AddressForm;