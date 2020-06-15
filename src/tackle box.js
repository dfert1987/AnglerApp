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
            .then(result => this.setState(
              {lures: result}
            )
        )
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
            if (lure.favorited == false) {
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

    render(){
        return  (
        <div className="main">
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
