import React, { Component } from 'react'

class PRForm extends Component {

state = {
    pr: 0
}

handleChange = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    this.prBackend()
}

prBackend = () => {
    this.props.oneFish.pr = this.state.pr
    fetch(`http://localhost:3000/fish/${this.props.oneFish.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(this.props.oneFish)
        }) 
        console.log(this.props.oneFish.pr)
}

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="addPRForm">
                    <h4 className="pr-title">BIGGEST CATCH</h4>
                    <input className="inputPR" type="text" name='pr' placeholder="0 in" value={this.state.pr} onChange={this.handleChange}/>
                    <input className="submitPR" type="submit" value="Submit Size" />
                </form>
            </div>
        )
    }

}

export default PRForm
