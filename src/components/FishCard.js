import React, {Component} from 'react';
import Flippy, {FrontSide, BackSide} from 'react-flippy';

class FishCard extends Component {
  state = {
    pr: this.props.oneFish.pr,
  };

  handleChange = (event) => {
    console.log(this.props);
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.prBackend();
    this.prFrontend(event);
  };

  prBackend = () => {
    this.props.oneFish.pr = this.state.pr;
    fetch(`http://localhost:3000/fish/${this.props.oneFish.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props.oneFish),
    });
  };

  prFrontend = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  showPrForm = () => {
    if (this.props.caught === true) {
      return (
        <div className='pr-container'>
          <form onSubmit={this.handleSubmit} className='addPRForm'>
            <h4 className='pr-title'>BIGGEST CATCH (In.)</h4>
            <input
              className='inputPR'
              type='text'
              name='pr'
              placeholder='0 in'
              value={this.state.pr}
              onChange={this.handleChange}
            />
            <input className='submitPR' type='submit' value='Submit Size' />
          </form>
        </div>
      );
    }
    return null;
  };

  showBiggestCatch = () => {
    if (this.props.caught === true) {
      return (
        <div>
          <h3 className='PR'>Biggest Catch: {this.state.pr} in. </h3>
        </div>
      );
    }
    return null;
  };

  render() {
    const handleClick = () => {
      if (this.props.addToCaught) {
        this.props.addToCaught(this.props.oneFish);
        this.props.caughtBackend(this.props.oneFish);
      } else {
        this.props.removeFromCaught(this.props.oneFish);
        this.props.removeFromCaughtBackend(this.props.oneFish);
      }
    };

    return (
      <div className='FishCardContainer'>
        <Flippy
          className='flippy'
          flipOnHover={false}
          flipOnClick={true}
          flipDirection='horizontal'
          ref={(r) => (this.flippy = r)}
          style={{width: '100%', height: '100%'}}
        >
          <FrontSide>
            <div className='Card-Front'>
                <h3 className='FishName'>{this.props.oneFish.species}</h3>
                <img
                  className='FishPic'
                  src={this.props.oneFish.image}
                  alt={this.props.oneFish.name}
                />
                <div className='Button-Container'>
                  <button className='Button-Flip'>SEE INFO</button>
                </div>
                {this.showBiggestCatch()}
            </div>
          </FrontSide>
          <BackSide>
            <div className='Card-Back'>
              <div className='Card-Back-Content'>
                <h4>About:</h4>
                <p className='fishparagraph'>
                  {this.props.oneFish.description}
                </p>
              </div>
              <button className='Button-Flip-Back'>SEE IMAGE</button>
            </div>
          </BackSide>
        </Flippy>
        {this.showPrForm()}
        <button className='AddCaughtButton' onClick={handleClick}>
          TOGGLE CAUGHT
        </button>
      </div>
    );
  }
}

export default FishCard;
