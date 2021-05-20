import React, {Component} from 'react';
import Geocode from 'react-geocode';
import AddLocationModal from './AddLocationModal';

Geocode.setLanguage('en');
Geocode.setRegion('US');
Geocode.setApiKey('AIzaSyDYaZrPGmzfTjvWMW9uQAeJopq1UflPhvw');

class LongLatForm extends Component {
  state = {
    address: '',
    longitude: '',
    latitude: '',
    show: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.showStateChange();
  };

  handleSubmitAddress = (event) => {
    event.preventDefault();
    this.convertAddress();
    this.showStateChange();
  };

  convertAddress = () => {
    Geocode.fromAddress(this.state.address).then((response) => {
      const {lat, lng} = response.results[0].geometry.location;
      this.setLong(lng);
      this.setLat(lat);
      console.log(lat);
      this.showStateChange();
    });
  };

  setLong = (lng) => {
    this.setState({
      longitude: lng,
    });
    console.log(this.state.longitude);
  };

  setLat = (lat) => {
    this.setState({
      latitude: lat,
    });
  };

  showStateChange = () => {
    this.setState({
      show: true,
    });
    console.log(this.state);
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  showModal = () => {
    if (this.state.show === true) {
      return (
        <AddLocationModal
          lat={this.state.latitude}
          lng={this.state.longitude}
          showModal={this.closeModal}
          addLocation={this.props.addLocation}
          locations={this.props.locations}
        />
      );
    }
  };

  render() {
    return (
      <div className='map-with-modal'>
        <div className='mapFormContainer'>
          <div className='title-container'>
            <h2 className='addMarkerTitle'>ADD NEW FISHING SPOT</h2>
            <h4 className='addMarkerOnBoard'>
              Enter Location by Coordinates Or Address
            </h4>
          </div>
          <div className='both-forms'>
            <form className='addMarkerFormLongLat' onSubmit={this.handleSubmit}>
              <div className='longitude-container'>
                <label className='longitudeLabel'>Longitude: </label>
                <input
                  className='longitudeInput'
                  type='number'
                  name='longitude'
                  placeholder='39.7392...'
                  value={this.state.longitude}
                  onChange={this.handleChange}
                />
              </div>
              <div className='latitude-container'>
                <label className='latitudeLabel'>Latitude: </label>
                <input
                  className='latitudeInput'
                  type='number'
                  name='latitude'
                  placeholder='104.9903'
                  value={this.state.latitude}
                  onChange={this.handleChange}
                />
              </div>
              <input className='longLatSubmit' type='submit' />
            </form>
            <div>
              <h4 className='or'>or</h4>
            </div>
            <form
              className='addMarkerFormAddress'
              onSubmit={this.handleSubmitAddress}
            >
              <div className='addressContainer'>
                <label className='addressLabel'>Address: </label>
                <input
                  className='addressInput'
                  type='text'
                  name='address'
                  placeholder='255 Fishy Road, Fishville, CO 80205'
                  onChange={this.handleChange}
                />
              </div>
              <input className='addressSubmit' type='submit'></input>
            </form>
          </div>
        </div>
        {this.showModal()}
      </div>
    );
  }
}

export default LongLatForm;
