import React from 'react'


export default function LocationCard({location}) {

    let name = `${location.name}`
    let upper = name.toUpperCase()
   

    return (
    <div className="Location-Card">
        <div className="Location-header">
            <h1>WELCOME TO {upper}</h1>
            <h3>- {location.body} -</h3>
            <div className="Image-container">
                <img src={location.image} />
            </div>
        </div>
        <div className="Info-Section">
            <p className="description">{location.description}</p>
        </div>
    </div>
    )

}