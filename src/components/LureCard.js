import React from 'react'

export default function LureCard({lure, addToTackleBox, removeFromTackleBox, favoriteBackend, unfavoriteBackend}){

    const handleClick = () =>{
      if(addToTackleBox){
        addToTackleBox(lure)
        favoriteBackend(lure)
      }
      else {
        removeFromTackleBox(lure)
        unfavoriteBackend(lure)
        }
    }
    
        return (
            <li className="lure-card" >
              <h3>{lure.name}</h3>
              <img className ="lure-card-img" src={lure.image}/>
              <h4>BRAND: {lure.brand}</h4>
              <h4>TYPE: {lure.lureType}</h4>
              <h4>COLOR: {lure.color}</h4>
              <h4>SIZE: {lure.size}</h4>
              <button className="Add-remove" onClick={handleClick}>Add/Remove</button>
            </li>
          )
        }