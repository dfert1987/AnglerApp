import React, { Component } from 'react';
import Navbar from './navbar.js';
import MarkerImage from './images/clearfishsmall.png';
import AddressForm from './components/AddressForm.js'
import NameForm from './components/NameForm.js'
import LongLatForm from './components/LongLatForm.js'
import './map.css';


class MapPage extends Component {

    state = {
        locations: []
      }

    componentDidMount() {
        fetch('http://localhost:3000/locations')
            .then(response => response.json())
            .then(result => this.controllerFunction(result)
        )
    }

    controllerFunction = (result) => {
        this.setLocations(result)
    }

    setLocations =(result) => {
        this.setState(
            {locations: result},
            this.renderMap()
          )
        }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDYaZrPGmzfTjvWMW9uQAeJopq1UflPhvw&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
       const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat:39.113014, lng: -105.358887},
            zoom: 8
            })
    var infowindow = new window.google.maps.InfoWindow()

    
    this.state.locations.map(location => {

        var contentString = `${location.name}`

        var marker = new window.google.maps.Marker({
            position: {lat: parseFloat(location.lat), 
                    lng: parseFloat(location.lng)},
            map: map, 
            title: location.name,
            icon:  MarkerImage,
            id: location.id      
        })
        
        marker.addListener('click', function() {
            window.location.href = `/tripspage/${location.id}`
        })



         marker.addListener('mouseover', function() {

            console.log(location)

            infowindow.setContent(contentString)

            infowindow.open(map, marker)
        })
    })
    }
    render(){
        return  (
            <div>
            <div className="Main Render">
                <div className="nav-bar">
                    <Navbar />
                    <h1 className="maptitle">YOUR FISHING SPOTS</h1>
                    <h3 className="mapsubtitle">- Click a Marker to See Past Trips-</h3>
                </div>
                <div className="map-wrapper">
                    <div id="map"></div>
                </div>
            </div>
            <div className="mapFormContainer">
                <h2 className="addMarkerTitle">ADD A FISHING SPOT</h2>
                <h4 className="addMarkerOnBoard">- Enter location by Name, Address or Coordinates -</h4>
                <div className="formInputs">
                    <LongLatForm />
                    <AddressForm />
                    <NameForm />
                </div>
\            </div>
            </div>
        )
    }
}

function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }


export default MapPage;
