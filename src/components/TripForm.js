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

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    onChange = time => this.setState({ time })

    render(){ 
        return (
        <div className="formcont">
            <form class="addtripform">
            <h2 className="log">LOG YOUR TRIP!</h2>
            <div>
                <label>Date:</label>
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
                <label>Time:</label>
                <TimePicker 
                    onChange={this.onChange}
                    value={this.state.time}
                />
            </div>
            <div className="length">
                <label>Hours Fished: </label>
                <input
                    type="number"
                    name="length"
                    placeholder="0"
                    value={this.state.length}
                    onChange={this.handleChange}
                >
                </input>
            </div>
            <div className="temperature">
                <label>Temperature: </label> 
                <input 
                    type="number"
                    name="temperature"
                    placeholder="Degreees Farenheidt"
                    value={this.state.temperature}
                    onChange={this.handleChange}
                >    
                </input>
            </div>
            <div className="weather">
                <label>Weather: </label>
                <input 
                    type="text" 
                    name="weather" 
                    placeholder="Sunny, rainy, etc." 
                    value={this.state.weather} 
                    onChange={this.handleChange}>
                </input>
            </div>
            <div>
                <BestLureDropDown />
            </div>
            <div className="descriptionWrapper">
                <p>Description: </p>
                <p type="Description:">
                <input name="description"
                    placeholder="Describe your day fishing..." 
                    value={this.state.description} 
                    onChange={this.handleChange}>
                </input>
                </p>
            </div>
            <button>Log It!</button>
            <div>
            </div>
          </form>
        </div>
        )
    }
}