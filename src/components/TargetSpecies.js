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
        <p className="speciesName"> {this.state.species.toLocaleUpperCase()}</p>
        )
    }
}
export default TargetSpecies