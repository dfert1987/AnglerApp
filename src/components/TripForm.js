import React, {Component } from 'react'
import "react-datepicker/dist/react-datepicker.css";

export default class TripForm extends Component {

    state = {
        id: 1,
        date: '',
        time: '',
        weather: '',
        temperature: 0,
        length: '',
        description: '',
        bestLure: 0,
        allLures: [],
        tackleBox: [],
        allFish: [],
        targetedSpecies: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

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
        let duration = this.state.length
        let time_start = this.state.time
        let date = this.state.date
        let weather = this.state.weather
        let temperature = this.state.temperature
        let description = this.state.description
        let lure_id = this.state.bestLure
        let location_id = this.props.location
        let fish_id = this.state.targetedSpecies
        let addedTrip = {
            duration, 
            time_start,
            date, 
            weather, 
            temperature, 
            description, 
            lure_id, 
            location_id,
            fish_id
        }
        event.preventDefault()
        this.props.addTrip( addedTrip )
    }

    render(){ 
        return (
            <form className="addTripForm" onSubmit={this.handleSubmit}>
                <div className="formcont">
                    <h2 className="log">LOG YOUR TRIP!</h2>
                    <div className="top-row">
                        <div className="dateSection">
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
                            <label className='speciesLabel'>Targeted Species: </label>
                            <select
                                className="targetedSpecies"
                                name="targetedSpecies"
                                onChange={this.handleChange}
                                value={this.state.targetedSpecies}
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
                                type="text"
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
                    <input className="tripsubmit" type="submit" />
                </div>
            </form>
            )
        }
    }