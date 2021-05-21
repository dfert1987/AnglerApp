import React, {Component} from 'react';

class AddLocationModal extends Component {
  state = {
    name: '',
    image: '',
    body: '',
    description: '',
    lng: 0,
    lat: 0,
    id: this.props.locations.length + 1,
    show: true,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      lng: this.props.lng,
    });
    this.setState({
      lat: this.props.lat,
    });
    this.toMapPage();
    this.handleClick(event)
  };

  toMapPage = () => {
    let name = this.state.name;
    let image = this.state.image;
    let body = this.state.body;
    let description = this.state.description;
    let lng = this.props.lng;
    let lat = this.props.lat;
    let id = this.state.id;
    let newLocation = {
      lat,
      lng,
      name,
      image,
      description,
      body,
      id,
    };
    this.props.addLocation(newLocation);
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      show: false,
    });
    this.props.showModal();
  };

  render() {
    return (
      <div className='modalContainer'>
        <h2 className='modalTitle'>ENTER LOCATION INFO</h2>
        <form className='modalForm' onSubmit={this.handleSubmit}>
          <div className='nameContainer'>
            <label className='fishingHoleLabel'>FISHING HOLE NAME: </label>
            <input
              className='fishingHoleInput'
              name='name'
              type='text'
              placeholder="Sloan's Lake"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </div>
          <br></br>
          <div className='picContainer'>
            <label className='spotPictureLabel'>IMAGE: </label>
            <input
              className='spotPictureLink'
              name='image'
              type='text'
              value={this.state.image}
              onChange={this.handleChange}
              placeholder='https://cdn.5280.com/2017/06/lake-effect_john-lebya-getty-images.jpg'
            ></input>
          </div>
          <br></br>
          <div className='bodyContainer'>
            <label className='bodyLabel'>BODY OF WATER: </label>
            <select
              className='bodyInput'
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
              defaultValue='lake'
            >
              <option value='lake'>Lake</option>
              <option value='river'>River</option>
              <option value='creek'>Creek</option>
              <option value='pond'>Pond</option>
              <option value='reservoir'>Reservoir</option>
            </select>
          </div>
          <br></br>
          <div className='descriptionContainer'>
            <label className='descriptionLabel'>DESCRIPTION: </label>
            <br></br>
            <textarea
              className='locationDescriptionInput'
              name='description'
              rows='10'
              cols='40'
              placeholder='Small lake in a residential neighborhood....'
              value={this.state.description}
              onChange={this.handleChange}
            ></textarea>
            <br></br>
            <div className='buttonRow'>
              <input className='locationSubmit' type='submit' />
              <button
                className='closeModalButton'
                value={this.state.show}
                onClick={this.handleClick}
              >
                Close
              </button>
            </div>
          </div>
          <input type='hidden' name='id' value={this.state.id + 1} />
        </form>
      </div>
    );
  }
}
export default AddLocationModal;
