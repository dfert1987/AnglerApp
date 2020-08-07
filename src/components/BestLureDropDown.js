import React, { Component } from 'react'

class BestLureDropdown extends Component {

state = {
    lure: []
}

fetchOptions = () => {
    fetch(`http://localhost:3000/lures`)
    .then(response => response.json())
    .then(response => this.showLures(response)
    )
}

showLures = (lures) => {
    lures.forEach(function(lure) {
        if (lure.favorited === true) {
            return (
                <option className="lure" value={lure.name}>{lure.name}</option>
            )
        }
    })
}

    render() {
        return(
            <div>
                <label>Best Lure:</label>
                <select className="lureChoice" name='lureType' value={this.state.lure} onChange={this.handleChange}>
                    {this.fetchOptions()}
                </select>
            </div>

        )
    }
}

export default BestLureDropdown