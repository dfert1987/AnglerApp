import React, { Component } from 'react';
import Navbar from './navbar.js';
import FishCard from './components/FishCard.js';
import './fish.css'

class Fish extends Component {

state = {
    allFish: []  
  }

  componentDidMount(){
    fetch('http://localhost:3000/fish')
        .then(response => response.json())
        .then(result => this.controllerFunction(result)
    )
}
controllerFunction = (result) => {
    this.setFish(result)
}

setFish = (result) => {
    this.setState(
        {allFish: result}
      )
}

showFish = () => this.state.allFish.map(oneFish => {
    return <FishCard key={oneFish.id} 
        oneFish={oneFish}/> 
})
    render(){

    return  (
    <div className="main">
        <div className="nav-bar">
            <Navbar />
        </div>
        <div>
            <h1>FISH-DEX</h1>
        </div> 
            <div className="fishContainer">
                <ul className="fish-list">
                    {this.showFish()}
                </ul>
            </div>
    </div>
    )
    }
}
export default Fish;