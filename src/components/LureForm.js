import React, {Component} from 'react'

export default class LureForm extends Component {

    state = {
        name: "",
        image: "",
        brand: "",
        type: "",
        color: "",
        size: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addLure(this.state)
    }

    render(){
        
        return (
            <form onSubmit={this.handleSubmit} className="addLure">
                <h2 className="form-title">ADD NEW LURE</h2>
                <label> NAME:  </label>
                <input className="input" type="text" name='name' placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                <label>  IMAGE:  </label>
                <input className="input" type="text" name='image' placeholder="Image URL" value={this.state.image} onChange={this.handleChange}/> <br/>
                <label>  BRAND:  </label>
                <input className="input" type="text" name='brand' placeholder="Brand" value={this.state.brand} onChange={this.handleChange} /> 
                <label>  TYPE:  </label>
                <select className="input" id="lure-types" name='type' value={this.state.type} onChange={this.handleChange}>
                    <option value = "crank">CRANK</option>
                    <option value = "popper">POPPER</option>
                    <option value = "fly">FLY</option>
                    <option value = "swim bait">SWIM BAIT</option>
                    <option value = "spoon">SPOON</option>
                    <option value = "jig">JIG</option>
                    <option value = "jerk">JERK</option>
                    <option value = "spinner">SPINNER</option>
                    <option value = "soft plastic">SOFT PLASTIC</option>
                    <option value = "topwater">TOPWATER</option>
                </select><br/>
                <label>  COLOR:  </label>
                <input className="input" type="text" name='color' placeholder="Color" value={this.state.color} onChange={this.handleChange}/>
                <label>  SIZE:  </label>
                <select className="input" id="lure-size" name='size' value={this.state.size} onChange={this.handleChange}>
                    <option value = "S">SMALL</option>
                    <option value = "M">MEDIUM</option>
                    <option value = "L">LARGE</option>
                </select><br/>
                <input className="submit" type="submit" value="Add Lure"/>
            </form>
        )
    }
}