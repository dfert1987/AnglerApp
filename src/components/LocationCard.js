import React from 'react'


export default function LocationCard({location}) {

    let name = `${location.name}`
    let upper = name.toUpperCase()
   

    return (
        <div className="trips-card">
            <h1>WELCOME TO {upper}</h1>
        </div>
    )

}