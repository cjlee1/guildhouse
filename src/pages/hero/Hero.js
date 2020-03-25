import React, { Component } from 'react';
import logo from '../../images/Logo.png'; 
import { NavLink,Link } from 'react-router-dom';
import styled from "styled-components";

class Hero extends Component {
  render() {
    return (
    <div className="main-Hero-container"> 
        <HeaderComponent className="header-top">
            <NavLink to="/"><Logo  alt="Guildhouse" className="Logo" >
            </Logo></NavLink>
        </HeaderComponent>
    </div>
    );
  }
}
export default Hero; 
//Logo
const Logo= styled.img`
    // width:20em; if logo is not there
    height:5rem;
    position:absolute;
    left:50%;
    font-family: 'Helvetica Bold', sans-serif;
    font-size: 3rem;
    font-weight: 900;
    transform: translate(-50%,-5%);
`;
//Header Container
const HeaderComponent = styled.header`

    // header content
    .header-content{
        width: 65%;
        position:relative;
        margin: 4.5rem auto 0;
        display:flex;
        justify-content:center;
        align-content: center;
        text-align:center;
        flex-direction:column;
        z-index:1;
    }
  }
    
`;