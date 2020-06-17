import React, {Component} from 'react';
import Navbar from './navbar.js';
import './map.css';



class MapPage extends Component {

    state = {
        Locations: []
      }

    componentDidMount() {
        this.renderMap()
        fetch('http://localhost:3000/locations')
            .then(response => response.json())
            .then(result => this.controllerFunction(result)
        )
    }

    controllerFunction = (result) => {
        this.setLocations(result)
        console.log(result)
    }

    setLocations =(result) => {
        this.setState(
            {locations: result}
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
        }
    
    render(){
        return  (
            <div className="Main Render">
                <div className="nav-bar">
                    <Navbar />
                </div>
                <div className="map-wrapper">
                    <div id="map"></div>
                </div>
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
