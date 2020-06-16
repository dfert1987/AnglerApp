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

    render(){
        return (
            
            <form className="addLure">
                <h2 className="form-title">ADD NEW LURE</h2>
                <label> NAME:   </label>
                <input class="input" type="text" name='name' placeholder="Name" value={this.state.name}/>
                <label>  IMAGE:  </label>
                <input class="input" type="text" name='image' placeholder="Image URL" value={this.state.image}/> <br/>
                <label>  BRAND:  </label>
                <input class="input" type="text" name='brand' placeholder="Brand" value={this.state.brand}/> 
                <label>  TYPE:  </label>
                <select class="input" id="lure-types" value={this.state.type}>
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
                <input class="input" type="text" name='color' placeholder="Color" value={this.state.color}/>
                <label>  SIZE:  </label>
                <select class="input" id="lure-size" value={this.state.size} >
                    <option value = "S">SMALL</option>
                    <option value = "M">MEDIUM</option>
                    <option value = "L">LARGE</option>
                </select><br/>
                <input class="submit" type="submit" value="Add Lure"/>
            </form>
        )
    }
}