import React,  { Component } from 'react';

class AddLocationModal extends Component {

    state = {
        name: "",
        image: "",
        body: "",
        description: "",
        lng: this.props.lng,
        lat: this.props,
        show: true
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    handleClick = (event) => {
        event.preventDefault()
        this.setState({
            show: false
        })
         this.props.showModal()   
    }

    render(){
        return(
            <div className="modalContainer">
                <h2 className="ModalTitle">ENTER LOCATION INFO</h2>
                <form className="modalForm" onSubmit={this.handleSubmit} >
                    <div className="spot">
                    <label className="fishingHoleLabel">FISHING HOLE NAME: </label>
                    <input className= "fishingHoleInput" name="name" type="text" placeholder="Sloan's Lake" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <br></br>
                    <div className="pic">
                    <label className="spotPictureLabel">IMAGE: </label>
                    {/* <input className="spotPictureFile" name="image" type="file" value={this.state.image} onChange={this.handleChange}/>
                    <p className="modalOr">OR</p> */}
                    <input className="spotPictureLink" name="image" type="text" value={this.state.image} onChange={this.handleChange} placeholder="https://cdn.5280.com/2017/06/lake-effect_john-lebya-getty-images.jpg"></input>
                    </div>
                    <br></br>
                    <div className="body">
                    <label className="bodyLabel" >BODY OF WATER: </label>
                    <select className="bodyInput" name="body" value={this.state.body} onChange={this.handleChange} >
                        <option value="lake">Lake</option>
                        <option value="river">River</option>
                        <option value="creek">Creek</option>
                        <option value="pond">Pond</option>
                        <option value="reservoir">Reservoir</option>
                    </select>
                    </div>
                    <br></br>
                    <div className="descript">
                    <label className="descriptionLabel">DESCRIPTION: </label>
                    <br></br>
                    <input className="locationDescriptionInput" name="description" placeholder="Small lake in a residential neighborhood" value={this.state.description} onChange={this.handleChange}></input>
                    <br></br>
                    <input className="locationSubmit" type="submit"/>
                    </div>
                </form>
                <button className="closeModalButton" value={this.state.show} onClick={this.handleClick}>Close</button>
            </div>
        )
    }
}
export default AddLocationModal;