import React,  { Component } from 'react';
import Geocode from "react-geocode";
import AddLocationModal from './AddLocationModal'

Geocode.setLanguage("en")
Geocode.setRegion("us")
Geocode.setApiKey("AIzaSyDYaZrPGmzfTjvWMW9uQAeJopq1UflPhvw") 

class AddressForm extends Component {

    state = {
        address:"",
        longitude:0,
        latitude:0,
        show: false
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
                this.setLong(lng)
                this.setLat(lat)
                this.showStateChange()
            }
        )
    }

    setLong = (lng) => {
        this.setState({
            longitude:lng
        })
    }

    setLat = (lat) => {
        this.setState({
            latitude:lat
        })
    }

    showStateChange = () => {
            this.setState({
                show: true
            })
            this.modal()
        }
        
    modal = () => {
        if(this.state.show === true) {
            this.props.locationModal(this.state.longitude, this.state.latitude)
        }
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