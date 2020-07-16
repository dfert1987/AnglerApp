import React, {Component} from 'react'

export default class TripForm extends Component {
    render(){ 
        return (
        <div className="formcontainer">
            <form class="form">
            <h2 className="log">LOG YOUR TRIP!</h2>
            <p type="Date:"><input placeholder="When was your trip?"></input></p>
            <p type="Time:"><input placeholder="What time were you fishing?"></input></p>
            <p type="Weather:"><input placeholder="How was the weather?"></input></p>
            <p type="Description:"><input placeholder="Describe your day fishing!"></input></p>
            <button>Log It!</button>
            <div>
            </div>
          </form>
        </div>
        )
    }
}