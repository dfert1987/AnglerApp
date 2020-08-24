import React,  { Component } from 'react';

class AddLocationModal extends Component {

    state = {
        name: "",
        image: "",
        body: "",
        description: "",
        lng: this.props.lng,
        lat: this.props.lat
    }

    render(){
        return(
            <div className="modalContainer">
                <h2>Enter Location Info</h2>
                <form>
                    <label className="fishingHoleLabel">FISHING HOLE NAME: </label>
                    <input className= "fishingHoleInput" name="name" type="text" placeholder="Sloan's Lake"></input>
                    <label className="spotPictureLabel">IMAGE: </label>
                    <input className="spotPictureFile" name="image" type="file"/>
                    <h3>OR</h3>
                    <input className="spotPictureLink" name="image" type="text" placeholder="https://cdn.5280.com/2017/06/lake-effect_john-lebya-getty-images.jpg"></input>
                    <label className="bodyLabel" >Body of Water: </label>
                    <select className="bodyInput" name="body">
                        <option value="lake">Lake</option>
                        <option value="river">River</option>
                        <option value="creek">Creek</option>
                        <option value="pond">Pond</option>
                        <option value="reservoir">Reservoir</option>
                    </select>
                    <label className="descriptionLabel">Description: </label>
                    <input className="descriptionInput" name="description" placeholder="Small lake in a residential neighborhood"></input>
                    <input className="locationSubmit" type="submit"/>
                </form>
            </div>
        )
    }
}
export default AddLocationModal;