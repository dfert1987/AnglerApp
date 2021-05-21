import React, {Component} from 'react';
import TargetSpecies from './TargetSpecies';
import BestLure from './BestLure';

class TripsModal extends Component {
  render() {
    const fishID = this.props.trip.fish_id;
    const lureID = this.props.trip.lure_id;

    return (
      <div className='tripscard'>
        <div className='trip-wrapper'>
          <div className='content'>
            <h4 className='date'>DATE: {this.props.trip.date}</h4>
            <p className='targetedSpecies'>
              TARGETED SPECIES:{' '}
              {fishID ? (
                <TargetSpecies fishID={fishID.toUpperCase()} />
              ) : (
                'NO DATA'
              )}
            </p>
            <p className='time'>
              STARTING TIME:{' '}
              {this.props.trip.time_start
                ? this.props.trip.time_start.toUpperCase()
                : 'NO DATA'}
            </p>
            <p className='duration'>
              {' '}
              HOURS FISHED:{' '}
              {this.props.trip.duration ? this.props.trip.duration : 'NO DATA'}
            </p>
            <p className='weather'>
              WEATHER: {this.props.trip.weather.toUpperCase()}
            </p>
            <p className='temperature'>
              TEMPERATURE:{' '}
              {this.props.trip.temperature
                ? this.props.trip.temperature + '°F'
                : 'NO DATA'}
            </p>
            {lureID ? (
              <BestLure lureID={lureID.toUpperCase()} />
            ) : (
              <p className='no-target'>BEST LURE: NO DATA</p>
            )}
            <div className='description-container'>
              <p className='trip-description'>DESCRITPION: </p>
              <p className='description-text'>
                {this.props.trip.description
                  ? this.props.trip.description.toUpperCase()
                  : 'NO DATA'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripsModal;
