import React, {Component } from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import TargetedSpeciesDropDown from './TargetedSpeciesDropDown';
import "react-datepicker/dist/react-datepicker.css";

export default class TripForm extends Component {

    state = {
        startDate: new Date(),
        time: '06:00',
        weather: '',
        temperature: 0,
        length: 0,
        description: '',
        bestLure: '',
        allLures: [],
        tackleBox: [],
        allFish: [],
        targetedSpecies: ''
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

    componentDidMount() {
        this.fetchLures()
        this.fetchFish()
    }

        fetchFish = () => {
            fetch('http://localhost:3000/fish')
                .then(response => response.json())
                .then(response => this.setFish(response)
            )
        }

        setFish = (response) => {
            this.setState(
                { allFish:response }
            )
        }

        fetchLures = () => {
        fetch(`http://localhost:3000/lures`)
            .then(response => response.json())
            .then(response => this.setLures(response)
            )
        }
    
    setLures = (lures) => {
        this.setState(
            { allLures:lures }
        )
        this.setTackleBox(lures)
    }
    
    setTackleBox = () => {
        const setTB = this.state.allLures.filter(lure => lure.favorited !== false)
            this.setState(
            { tackleBox:setTB }
        )
    }

    getFishOptions = () => this.state.allFish.map(fish => {
        return <option value = {fish.species}>{fish.species}</option>
    })

    lureDropDown = () => this.state.tackleBox.map(lure => {
            return <option value = {lure.name}>{lure.name}</option>    
        })

    render(){ 
        return (
            <form className="addTripForm">
                <div className="formcont">
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
                        <label>Targeted Species: </label>
                        <select
                            className="targetedSpecies"
                            name="targetedSpecies"
                            value={this.state.targetedSpecies}
                            onChange={this.handleChange}
                        >
                            {this.getFishOptions()}
                        </select>
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
                        <label>Best Lure:</label>
                        <select 
                            className="lureChoice" 
                            name='bestLure' 
                            value={this.state.lure} 
                            onChange={this.handleChange}
                        >
                            {this.lureDropDown()}
                        </select>
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
                </div>
            </form>
            )
        }
    }