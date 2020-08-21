import React,  { Component } from 'react';
import Geocode from "react-geocode";

class NameForm extends Component {

    render(){
        return(
            <div>
                <form className="addMarkerFormName">
                    <label className="nameLabel">Location Name: </label>
                    <input className="addressInput" type="text" placeholder="Lunker Lake"></input>
                    <input className="nameSubmit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default NameForm;