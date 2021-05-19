import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

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
    targetedSpecies: 0,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.fetchLures();
    this.fetchFish();
  }

  fetchFish = () => {
    fetch('http://localhost:3000/fish')
      .then((response) => response.json())
      .then((response) => this.setFish(response));
  };

  setFish = (response) => {
    this.setState({allFish: response});
  };

  fetchLures = () => {
    fetch(`http://localhost:3000/lures`)
      .then((response) => response.json())
      .then((response) => this.setLures(response));
  };

  setLures = (lures) => {
    this.setState({allLures: lures});
    this.setTackleBox(lures);
  };

  setTackleBox = () => {
    const setTB = this.state.allLures.filter(
      (lure) => lure.favorited !== false
    );
    this.setState({tackleBox: setTB});
  };

  getFishOptions = () =>
    this.state.allFish.map((fish) => {
      return <option value={fish.id}>{fish.species}</option>;
    });

  lureDropDown = () =>
    this.state.tackleBox.map((lure) => {
      return <option value={lure.id}>{lure.name}</option>;
    });

  handleSubmit = (event) => {
    let duration = this.state.length;
    let time_start = this.state.time;
    let date = this.state.date;
    let weather = this.state.weather;
    let temperature = this.state.temperature;
    let description = this.state.description;
    let lure_id = this.state.bestLure;
    let location_id = this.props.location;
    let fish_id = this.state.targetedSpecies;
    let addedTrip = {
      duration,
      time_start,
      date,
      weather,
      temperature,
      description,
      lure_id,
      location_id,
      fish_id,
    };
    event.preventDefault();
    this.props.addTrip(addedTrip);
  };

  render() {
    return (
      <form className='addTripForm' onSubmit={this.handleSubmit}>
        <div className='top-row'>
          <div className='dateSection'>
            <label className='dateLabel'>Date:</label>
            <input
              className='input'
              type='text'
              name='date'
              placeholder='mm/dd/yyyy'
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className='targetedSpeciesContainer'>
            <label className='speciesLabel'>Targeted Species: </label>
            <select
              className='select'
              name='targetedSpecies'
              onChange={this.handleChange}
              value={this.state.targetedSpecies}
            >
              {this.getFishOptions()}
            </select>
          </div>
        </div>
        <div className='second-row'>
          <div className='timeCont'>
            <label className='timeLabel'>Time:</label>
            <input
              className='input'
              type='text'
              name='time'
              placeholder='6:00 am'
              onChange={this.handleChange}
              value={this.state.time}
            />
          </div>
          <div className='length'>
            <label className='lengthLabel'>Hours Fished: </label>
            <input
              type='text'
              name='length'
              className='input'
              placeholder='0'
              value={this.state.length}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='third-row'>
          <div className='temperature'>
            <label className='temperatureLabel'>Temperature: </label>
            <input
              type='number'
              name='temperature'
              className='input'
              placeholder='Degreees Farenheidt'
              value={this.state.temperature}
              onChange={this.handleChange}
            />
          </div>
          <div className='weather'>
            <label className='weatherLabel'>Weather: </label>
            <input
              type='text'
              name='weather'
              className='input'
              placeholder='Sunny, rainy, etc.'
              value={this.state.weather}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='fourth-row'>
          <div className='lureCont'>
            <label className='lureLabel'>Best Lure:</label>
            <select
              className='lureChoice'
              name='bestLure'
              value={this.state.lure}
              onChange={this.handleChange}
            >
              {this.lureDropDown()}
            </select>
          </div>
        </div>
        <div className='descriptionWrapper'>
          <label className='descriptionHeader'>Description: </label>
          <p type='textarea'>
            <input
              className='descriptionInput'
              name='description'
              multiline={true}
              placeholder='Describe your day fishing...'
              value={this.state.description}
              onChange={this.handleChange}
            />
          </p>
        </div>
        <input className='tripsubmit' type='submit' />
      </form>
    );
  }
}
