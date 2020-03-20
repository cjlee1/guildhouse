import React, { Component } from 'react';
import logo from '../../images/Logo.png'; 
class Compendium extends Component {
  render() {
    return (
    <div className="main-compendium-container"> 
        <div className="header-top">
            <img src= {logo} alt="Guildhouse" className="Logo" />
        </div>
    </div>
    );
  }
}
export default Compendium; 