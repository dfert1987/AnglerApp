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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="addPRForm">
                    <h4 className="pr-title">BIGGEST CATCH</h4>
                    <input className="inputPR" type="text" name='pr' placeholder="0 in" value={this.state.pr} onChange={this.handleChange}/>
                    <input className="submitPR" type="submit" value="Submit Size"/>
                </form>
            </div>
        )
    }

}

export default PRForm
