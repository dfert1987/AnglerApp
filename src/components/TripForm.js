import React, {Component } from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import TargetedSpeciesDropDown from './TargetedSpeciesDropDown';
import BestLureDropDown from './BestLureDropDown'
import "react-datepicker/dist/react-datepicker.css";

export default class TripForm extends Component {

    state = {
        startDate: new Date(),
        time: '06:00',
        weather: '',
        temperature: 0,
        length: 0,
        description: ''
    }

    handleSelect = date => {
        this.setState({
            startDate: date
        });
    };

    onChange = time => this.setState({ time })

    render(){ 
        return (
        <div className="formcont">
            <form class="addtripform">
            <h2 className="log">LOG YOUR TRIP!</h2>
            <div>
                <p>Date:</p>
                <DatePicker
                    className="date"
                    selected={this.state.startDate} 
                    onSelect={this.handleSelect}
                />
            </div>
            <div className="TargetedSpeciesContainer">
                <TargetedSpeciesDropDown />
            </div>
            <div>
                <p>Time:</p>
                <TimePicker 
                    onChange={this.onChange}
                    value={this.state.time}
                />
            </div>
            <div className="weather">
                <p>Weather: </p>
                <input type="text"></input>
            </div>
            <div>
                <BestLureDropDown />
            </div>
            <div className="descriptionWrapper">
                <p>Description: </p>
                <p type="Description:"><input placeholder="Describe your day fishing..."></input></p>
            </div>
            <button>Log It!</button>
            <div>
            </div>
          </form>
        </div>
        )
    }
}