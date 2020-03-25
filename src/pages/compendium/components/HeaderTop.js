import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";
import { IconContext } from "react-icons";
// import '@fortawesome/fontawesome-svg-core/styles.css';
import {  FaArrowLeft, FaArrowRight, FaHome, FaBookOpen ,FaMandalorian} from "react-icons/fa";
import { createBrowserHistory } from 'history';
import { config } from '@fortawesome/fontawesome-svg-core';
import "../../../css/Header.css";
import { withRouter } from 'react-router'

class HeaderTop extends Component {
    constructor(props){
        super(props);
        this.goNext = this.goNext.bind(this);
        this.goBack = this.goBack.bind(this); // i think you are missing this
     }
     goNext(){
      this.props.history.goForward();
      alert(this.props.history.goForward());
    }
     goBack(){
         this.props.history.goBack();
     }
  render() {
    return (
      <div>
    <IconContext.Provider value={{ color: "white", className: "global-class-name", fontSize: '32px' }}>
        <FaArrowLeft  className="icons" onClick={this.goBack}    />
        <FaArrowRight  className="icons" onClick={this.goNext} />
        <NavLink  to="/" ><FaHome  className="icons"  /></NavLink>
        <NavLink to="/compendium" ><FaBookOpen active className="icons" /></NavLink>
    </IconContext.Provider>

      <Logo  className="logo" alt="Guildhouse">
      </Logo>
      <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
        
        <FaMandalorian  className="icons" />
    </IconContext.Provider>
    </div>
    );
  }
}
export default withRouter(HeaderTop);

// Logo
const Logo= styled.img`
    // width:20em; if logo is not there
    height:5rem;
    position:absolute;
    top:25%;
    left:50%;
    font-family: 'Helvetica Bold', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    transform: translate(-50%,-50%);
`;

