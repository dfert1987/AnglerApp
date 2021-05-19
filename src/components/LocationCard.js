import React from 'react';
import '../tripspage.css';

export default function LocationCard({location}) {
  let name = `${location.name}`;
  let upper = name.toUpperCase();

  return (
    <div className='location-card'>
      <div className='location-header'>
        <h1>WELCOME TO {upper}</h1>
        <h3 className='location-type'>- {location.body} -</h3>
        <div className='Image-container'>
          <img src={location.image} alt='location' />
        </div>
      </div>
      <div className='info-section'>
        <div className='info'>
          {location.description}
        </div>
      </div>
    </div>
  );
}
