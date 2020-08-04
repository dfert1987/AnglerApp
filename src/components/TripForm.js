import React, {Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class TripForm extends Component {

    state = {
        startDate: new Date()
    }

    handleSelect = date => {
        this.setState({
            startDate: date
        });
    };

    render(){ 
        return (
        <div className="formcont">
            <form class="addtripform">
            <h2 className="log">LOG YOUR TRIP!</h2>
            <DatePicker 
                selected={this.state.startDate} 
                onSelect={this.handleSelect}/>
            <p type="Time:"><input placeholder="Start time?"></input></p>
            <p type="Weather:"><input placeholder="Weather?"></input></p>
            <p type="Description:"><input placeholder="Describe your day fishing..."></input></p>
            <button>Log It!</button>
            <div>
            </div>
          </form>
        </div>
        )
    }
}