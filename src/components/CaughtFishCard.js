import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import PRPoint from './PRPoint.js';
import PRForm from './PRForm.js';



class  CaughtFishCard extends Component {

    showPR = () => {
        if(this.props.oneFish.caught === true) {
            return(
            <PRPoint 
            fish = {this.props.oneFish}
            />
            )
        }
    }
    
    prForm = () => {
        if(this.props.oneFish.caught === true) {
            return(
                <PRForm
                    oneFish = {this.props.oneFish}
                />
            )
        }
    }
    render() {

        return(
            <div className="CaughtFishCardContainer">
                <Flippy className='caughtFlippy'
                    flipOnHover={false}
                    flipOnClick={true}
                    flipDirection="horizontal" 
                    ref={(r) => this.flippy = r} 
                    style={{ width: '98%', height: '100%' }} 
                >         
                    <FrontSide>
                        <div className="Caught-Card-Front">
                            <div className="Caught-Front-Content">
                                <h3 className="FishName" >{this.props.oneFish.species}</h3>
                                <img className="FishPic" src={this.props.oneFish.image}/>
                                <button className='Button-Flip'>SEE INFO</button>
                                {this.showPR()}         
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