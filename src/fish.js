import React, { Component } from 'react';
import Navbar from './navbar.js';
import FishCard from './components/FishCard.js';
import CaughtFishCard from './components/FishCard.js';
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
    if(oneFish.caught === false) {
    return <FishCard key={oneFish.id} 
        oneFish={oneFish}/> 
    }
})

showCaught = () => this.state.allFish.map(oneFish => {
    if(oneFish.caught === true) {
        return <CaughtFishCard key={oneFish.id}
            oneFish={oneFish}/>
    }
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
        <div className="all-fish">
            <div className="fishContainer">
                <h2 className='NotCaughtTitle'>STILL FISHIN'</h2>
                <ul className="fish-list">
                    {this.showFish()}
                </ul>
            </div>
            <div className="caught-fish">
                <div className="caught-fishContainer">
                    <h2 className='CaughtTitle'>CAUGHT</h2>
                    <ul className='caught-list'>
                        {this.showCaught()}
                    </ul>
                </div>

            </div>
            </div>
    </div>
    )
    }
}
export default Fish;