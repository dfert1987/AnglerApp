import React from 'react'


export default function FishCard({ oneFish }) {

    return (
        <div className="FishCardContainer">
            <h3 className="FishName" >{oneFish.species}</h3>
            <img className="FishPic" src={oneFish.image}/>

        </div>
    )
}