import React, { Component } from 'react'

class BestLure extends Component {

    state = {
        lureName: ""
    }

    componentDidMount() {
        this.fetchLures()
    }

    fetchLures = () => {
        fetch(`http://localhost:3000/lures/${this.props.lureID}`)
        .then(response => response.json())
        .then(response => this.setLureName(response))
    }

    setLureName = (lure) => {
        this.setState(
            { lureName:lure.name }
        )
    }

    render(){

        return(
            <p className="bestLure">BEST LURE: {this.state.lureName} </p>
        )

    }



}

export default BestLure