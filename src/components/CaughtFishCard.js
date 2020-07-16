import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class  CaughtFishCard extends Component {

    render() {
        return(
            <div className="CaughtFishCardContainer">
           <Flippy className='caughtflippy'
    flipOnHover={false}
    flipOnClick={true}
    flipDirection="horizontal" 
    ref={(r) => this.flippy = r} 
    style={{ width: '98%', height: '100%' }} 
  >         
  <FrontSide>
            <div className="Caught-Card-Front">
                <div className="Front-Content">
            <h3 className="FishName" >{this.props.oneFish.species}</h3>
            <img className="FishPic" src={this.props.oneFish.image}/>
            <button className='Button-Flip'>SEE INFO</button>

            </div>
            </div>
            </FrontSide>
            <button className='Button-Add'>CAUGHT</button>

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

export default CaughtFishCard;