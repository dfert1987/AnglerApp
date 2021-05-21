import React, {Component} from 'react';

export default class LureForm extends Component {
  state = {
    id: 6,
    name: '',
    image: '',
    brand: '',
    lureType: '',
    color: '',
    size: '',
    favorited: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const defaultState = {
      id: this.state.id,
      name: '',
      image: '',
      brand: '',
      lureType: '',
      color: '',
      size: '',
      favorited: false,
    };

    event.preventDefault();
    this.props.addLure(this.state);
    this.setState(defaultState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='addLure'>
        <h2 className='form-title'>ADD NEW LURE</h2>
        <div className='first-row'>
          <div className='name-container'>
            <label>NAME: </label>
            <input
              className='name-input'
              type='text'
              name='name'
              placeholder='Name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='image-container'>
            <label>IMAGE: </label>
            <input
              className='image-input'
              type='text'
              name='image'
              placeholder='Image URL'
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <div className='brand-container'>
            <label>BRAND: </label>
            <input
              className='brand-input'
              type='text'
              name='brand'
              placeholder='Brand'
              value={this.state.brand}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className='row-2'>
          <div className='type-container'>
            <label>TYPE: </label>
            <select
              className='type-input'
              id='lure-types'
              name='lureType'
              value={this.state.lureType}
              onChange={this.handleChange}
            >
              <option value='crank'>CRANK</option>
              <option value='popper'>POPPER</option>
              <option value='fly'>FLY</option>
              <option value='swim bait'>SWIM BAIT</option>
              <option value='spoon'>SPOON</option>
              <option value='jig'>JIG</option>
              <option value='jerk'>JERK</option>
              <option value='spinner'>SPINNER</option>
              <option value='soft plastic'>SOFT PLASTIC</option>
              <option value='topwater'>TOPWATER</option>
            </select>
          </div>
          <div className='color-container'>
            <label>COLOR: </label>
            <input
              className='color-input'
              type='text'
              name='color'
              placeholder='Color'
              value={this.state.color}
              onChange={this.handleChange}
            />
          </div>
          <div className='size-container'>
            <label>SIZE: </label>
            <select
              className='size-input'
              id='lure-size'
              name='size'
              value={this.state.size}
              onChange={this.handleChange}
            >
              <option value='S'>SMALL</option>
              <option value='M'>MEDIUM</option>
              <option value='L'>LARGE</option>
            </select>
          </div>
        </div>
        <input type='hidden' name='favorited' value={this.state.favorited} />
        <input type='hidden' name='id' value={this.state.id++} />
        <input className='submit' type='submit' value='Add Lure' />
      </form>
    );
  }
}
