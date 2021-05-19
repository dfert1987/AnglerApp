import React from 'react';
import '../tripspage.css';

export default function LocationCard({location}) {
    const name = location.name;
    const upper = () => {
        if (name) {
          return name.toUpperCase();
        }
        return null;
      };
  

  return (
    <>
      <div className='location-header'>
      <h2 className='log'>ABOUT {upper()} </h2>
        <div className='image-container'>
          <img className='image' src={location.image} alt='location' />
        </div>
      </div>
      <div className='info-section'>
        <div className='info'>
          {location.description}
        </div>
      </div>
    </>
  );
}
