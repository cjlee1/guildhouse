import React, { Component } from 'react';
import logo from '../../images/Logo.png'; 
class Hero extends Component {
  render() {
    return (
    <div className="main-Hero-container"> 
        <div className="header-top">
            <img src= {logo} alt="Guildhouse" className="Logo" />
        </div>
    </div>
    );
  }
}
export default Hero; 