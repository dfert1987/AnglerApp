import React,  { Component } from 'react';
import Geocode from "react-geocode";

class NameForm extends Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <form className="addMarkerFormName" onSubmit={this.handleSubmit}>
                    <label className="nameLabel">Location Name: </label>
                    <input className="addressInput" type="text" name="name" placeholder="Lunker Lake" onChange={this.handleChange}></input>
                    <input className="nameSubmit" type="submit"></input>
                </form>
            </div>
        )
    }
}

export default NameForm;