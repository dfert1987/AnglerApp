import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class  FishCard extends Component {

    
    

    render() {
    return (
        <div className="FishCardContainer">
           <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    style={{ width: '98%', height: '100%' }} /// these are optional style, it is not necessary
  >         
  <FrontSide>
            <div className="Card-Front">
                <div className="Front-Content">
            <h3 className="FishName" >{this.props.oneFish.species}</h3>
            <img className="FishPic" src={this.props.oneFish.image}/>
            <button className='Button-Flip'>SEE INFO</button>
            </div>
            </div>
            </FrontSide>
            <BackSide>
            <div className="Card-Back">
                <div className="Card-Back-Content">
                <h4>About:</h4>
                <p className="fishparagraph">{this.props.oneFish.description}</p>
                </div>
                <button className='Button-Flip-Back'>SEE IMAGE</button>
            </div>
            </BackSide>
            </Flippy>
        </div>

        )
    }
}

export default FishCard;