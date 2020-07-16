import React, { Component } from 'react';
import Navbar from './navbar.js';
import FishCard from './components/FishCard.js';
import CaughtFishCard from './components/FishCard.js';
import './fish.css'

class Fish extends Component {

state = {
    allFish: [],
    caughtFish:[]  
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
      this.setCaughtFish(result)
}

setCaughtFish = () => {
    const setCF = this.state.allFish.filter(oneFish => oneFish.caught !== false)
    this.setState({
        caughtFish:setCF
      })
      console.log(this.state.caughtFish)
}


showFish = () => this.state.allFish.map(oneFish => {
    return <FishCard key={oneFish.id} 
        addToCaught={this.addToCaught}
        caughtBackend={this.caughtBackend} 
        oneFish={oneFish}/> 
})
addToCaught= (oneFish) => {
    if(!this.state.caughtFish.find(activeFish => oneFish.id === activeFish.id)){
        this.setState({
            caughtFish:[...this.state.caughtFish, oneFish]
          })
        }
    }  
caughtBackend = (oneFish) => {
    if (oneFish.caught === false) {
        oneFish.caught = true
    } else oneFish.caught = true 
        fetch(`http://localhost:3000/fish/${oneFish.id}`, {
            method: 'PATCH',
            headers: {
            "Content-Type": "application/json"
             },
            body: JSON.stringify(oneFish)
            })
        }

showCaught = () => this.state.caughtFish.map(oneFish => {
        return <CaughtFishCard key={oneFish.id}
            removeFromCaught={this.removeFromCaught} 
            removeFromCaughtBackend={this.removeFromCaughtBackend}
            oneFish={oneFish}/>
    })

    removeFromCaught= (oneFish) => {
        const filtered = this.state.caughtFish.filter(activeFish => activeFish.id !== oneFish.id )
            this.setState(
                {caughtFish: filtered}
            )
        }

        removeFromCaughtBackend =(oneFish) => {
            if (oneFish.caught === true) {
                oneFish.caught = false
            } else oneFish.caught = false 
                fetch(`http://localhost:3000/fish/${oneFish.id}`, {
                    method: 'PATCH',
                    headers: {
                    "Content-Type": "application/json"
                     },
                    body: JSON.stringify(oneFish)
                    })
        }

    
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