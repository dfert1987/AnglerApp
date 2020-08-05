import React, {Component } from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

export default class TripForm extends Component {

    state = {
        startDate: new Date(),
        time: '06:00'
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
                <DatePicker
                    className="date"
                    selected={this.state.startDate} 
                    onSelect={this.handleSelect}
                />
            </div>
            <div>
                <TimePicker 
                    onChange={this.onChange}
                    value={this.state.time}
                />
            </div>
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