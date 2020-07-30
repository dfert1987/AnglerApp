import React, { Component } from 'react'


class TargetSpecies extends Component {


state = {
    species: ""
}

componentDidMount() {
    this.fetchSpecies()
}

    fetchSpecies = () => {
        fetch(`http://localhost:3000/fish/${this.props.fishID}`)
        .then(response => response.json())
        .then(response => this.setSpecies(response)
        )
    }

    setSpecies = (response) => {
        this.setState(
            { species:response.species }
        )
    }


render() {


return (
        <h4>{this.state.species}</h4>
        )
    }
}
export default TargetSpecies