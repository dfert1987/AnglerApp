import React from 'react'


export default function TripsCards({trip}) {

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                    content.style.display = "none";
            } else {
                content.style.display = "block";
                    }
            });
    }

//    const eachTrip = trips.forEach(trip => {

    return (
        <div className="trips-card">
        <div className="trip-wrapper">
            <h4 className="date">Trip: {trip.date}</h4>
            <button type="button" className="collapsible">View Details</button>
            <div className="content">
                <p className="species">TARGETED SPECIES: {trip.fish_id.species}</p>
                <p className="time">STARTING TIME: {trip.time_start}</p>
                <p className="duration"> HOURS FISHED: {trip.duration}</p>
                <p className="weather">WEATHER: {trip.weather}</p>
                <p className="temperature">TEMPERATURE: {trip.temperature}</p>
                <p className="trip-description">DESCRITPION: {trip.description}</p>
                <p className="bestLure">BEST LURE: {trip.lure_id.name}</p>
            </div>
        </div>
        </div>
        )
}   
//     })
// }