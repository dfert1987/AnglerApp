import React, { Component } from 'react';
import './tacklebox.css';
import LureCard from './components/LureCard';
import Navbar from './navbar.js'

class TackleBox extends Component {

    state = {
        lures: [],
        tacklebox: []   
      }

    componentDidMount(){
        fetch('http://localhost:3000/lures')
            .then(response => response.json())
            .then(result => this.controllerFunction(result)
        )
    }
    controllerFunction = (result) => {
        this.setLures(result)
        

    }

    setLures =(result) => {
        this.setState(
            {lures: result}
          )
          this.setTackleBox(result)
        }

    setTackleBox =() => {
    const setTB = this.state.lures.filter(lure => lure.favorited !== false)
        this.setState({
            tacklebox:setTB
          })
    }
    

    showLures = () => this.state.lures.map(lure => {
        return <LureCard key={lure.id} 
        addToTackleBox={this.addToTackleBox}
        favoriteBackend={this.tackleBoxBackend} 
        lure={lure}/> 
      })
    
    showTackleBox = () => this.state.tacklebox.map(lure => {
        return <LureCard key={lure.id} 
        removeFromTackleBox={this.removeFromTackleBox} 
        unfavoriteBackend={this.unfavoriteBackend}
        lure={lure}/>
        })

    addToTackleBox = (lure) => {
        if(!this.state.tacklebox.find(activeLure => lure.id === activeLure.id)){
            this.setState({
                tacklebox:[...this.state.tacklebox, lure]
              })
            }
        }   
    tackleBoxBackend = (lure) => {
        if (lure.favorited === false) {
            lure.favorited = true
        } else lure.favorited = true 
            fetch(`http://localhost:3000/lures/${lure.id}`, {
                method: 'PATCH',
                headers: {
                "Content-Type": "application/json"
                 },
                body: JSON.stringify(lure)
                })
            }
    removeFromTackleBox = (lure) => {
        const filtered = this.state.tacklebox.filter(activeLure => activeLure.id !== lure.id )
            this.setState(
                {tacklebox: filtered}
            )
        }

    unfavoriteBackend =(lure) => {
        if (lure.favorited === true) {
            lure.favorited = false
        } else lure.favorited = false 
            fetch(`http://localhost:3000/lures/${lure.id}`, {
                method: 'PATCH',
                headers: {
                "Content-Type": "application/json"
                 },
                body: JSON.stringify(lure)
                })
    }
         
    render(){
        return  (
        <div className="main-tb">
            <div className="nav-bar">
                <Navbar />
            </div>
            <div className="Title-Container">
                <h1 className="TB-title">TACKLE BOX</h1>
                <h3 className="TB-subtitle"> - Customize Your Tackle Box -</h3>
            </div>
            <div className="your-tacklebox">
                <h3 className="tacklebox-header">Current TackleBox</h3>
                <ul className="current-tacklebox">
                    {this.showTackleBox()}
                </ul>
            </div>
            <div className="all-lures">
                <h3 className="all-lures-header">Lure Options</h3>
                <ul className="lure-list">
                    {this.showLures()}
                </ul>
            </div>
        </div>
        )
    }
}
export default TackleBox;
