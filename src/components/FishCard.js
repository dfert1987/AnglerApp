import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy';



class  FishCard extends Component {

    
    render() {
        const handleClick = () =>{
            if(this.props.addToCaught){
              this.props.addToCaught(this.props.oneFish)
              this.props.caughtBackend(this.props.oneFish)
            }
            else {
              this.props.removeFromCaught(this.props.oneFish)
              this.props.removeFromCaughtBackend(this.props.oneFish)
              }
          }
        return (
            <div className="FishCardContainer">
                <Flippy className='flippy'
                    flipOnHover={false} 
                    flipOnClick={true} 
                    flipDirection="horizontal"
                    ref={(r) => this.flippy = r} 
                    style={{ width: '98%', height: '100%' }} 
                >         
                    <FrontSide>
                        <div className="Card-Front">
                            <div className="Front-Content">
                                <h3 className="FishName" >{this.props.oneFish.species}</h3>
                                <img className="FishPic" src={this.props.oneFish.image}/>
                                <div className="Button-Container">
                                    <button className='Button-Flip'>SEE INFO</button>
                                </div>
                            </div>
                        </div>
                    </FrontSide>
                    <button className='AddCaughtButton' onClick={handleClick}>TOGGLE CAUGHT</button>
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