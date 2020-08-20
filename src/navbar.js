import React, {Component} from 'react';
import logo from './images/logo.png';
import './navbar.css'


class Navbar extends Component{

    state={
        isOpen:false
    }
    handleClick = () => {
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }

    render(){
        return(
        // <Router>
            <nav>
                <div className="logoBtn">
                    <div className="logo">
                        <a href="#"><img src={logo} 
                        className="logo" alt=""/></a>
                    </div>

                    <div className="btn"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
           

                <ul>
\                    <li><a href="/home"> Home  </a></li>
                    <li><a href="/tacklebox"> TackleBox  </a></li>
                    <li><a href="/MapPage">  Map  </a></li>
                    <li><a href="/fish">  Fish-Dex </a></li>
                </ul>
                </div>
            </nav>
        // </Router>
        )
    }
}

export default Navbar;