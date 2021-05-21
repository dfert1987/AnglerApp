import React, {Component} from 'react';
import TripsModal from './TripsModal';
import '../tripspage.css';

class TripCards extends Component {
  state = {
    show: false,
  };

  showStateChange = (e) => {
    if (this.state.show === false) {
      this.setState({
        show: true,
      });
    } else {
      this.setState({
        show: false,
      });
    }
  };

  modal = () => {
    if (this.state.show === true) {
      return <TripsModal trip={this.props.trip} />;
    }
  };

  render() {
    return (
      <div className='tripWithModal'>
        <div className='tripNoModal'>
          <h3 className='tripDate'>{this.props.trip.date}</h3>
          <button
            className='tripButton'
            onClick={(e) => {
              this.showStateChange();
            }}
          >
            {' '}
            Show/Hide Details
          </button>
        </div>
        {this.modal()}
      </div>
    );
  }
}

export default TripCards;
