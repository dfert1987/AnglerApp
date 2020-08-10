import React, {Component } from 'react'
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import TargetedSpeciesDropDown from './TargetedSpeciesDropDown';
import "react-datepicker/dist/react-datepicker.css";

export default class TripForm extends Component {

    state = {
        id: 1,
        startDate: new Date(),
        time: '',
        weather: '',
        temperature: 0,
        length: 0,
        description: '',
        bestLure: '',
        location: this.props.location,
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
        return <option value = {fish.id}>{fish.species}</option>
    })

    lureDropDown = () => this.state.tackleBox.map(lure => {
            return <option value = {lure.id}>{lure.name}</option>    
        })

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.startDate)
        this.props.addTrip(
            this.state.startDate,
            this.state.weather,
            this.state.temperature,
            this.state.length,
            this.state.description,
            this.state.bestLure,
            this.state.location,
            this.state.targetedSpecies,
            this.state.id
            )
    }

    render(){ 
        return (
            <form className="addTripForm" onSubmit={this.handleSubmit}>
                <div className="formcont">
                    <h2 className="log">LOG YOUR TRIP!</h2>
                    <div className="top-row">
                    <div clasName="dateSection">
                        <label className ="dateLabel">Date:</label>
                        <input
                            className="dateInput"
                            type="text"
                            name="date"
                            placeholder="mm/dd/yyyy"
                            value={this.state.date}
                            onChange={this.handleChange}
                        >
                        </input>
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
                    <div className="timeCont">
                        <label className="timeLabel">Time:</label>
                        <input
                            className="timeInput"
                            type="text"
                            name="time"
                            placeholder="6:00 am"
                            onChange={this.handleChange}
                            value={this.state.time}
                        >
                        </input>
                    </div>
                    </div>
                    <div className="row2">
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
                            placeholderStyle={{fontSize: 12}}
                            value={this.state.weather} 
                            onChange={this.handleChange}
                            >
                        </input>
                    </div>
                    <div className="lureCont">
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
                    </div>
                    <div className="descriptionWrapper">
                        <p className="descriptionHeader">Description: </p>
                        <p type="textarea">
                        <input 
                            className="descriptionInput"
                            name="description"
                            multiline = {true}
                            placeholder="Describe your day fishing..." 
                            value={this.state.description} 
                            onChange={this.handleChange}>
                        </input>
                        </p>
                    </div>
                    <input className="submit" type="submit" />
                </div>
            </form>
            )
        }
    }