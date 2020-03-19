import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";

import logo from '../images/Logo.png'; 
class Header extends Component {
  render() {
    return (
        <HeaderComponent className="header-container"> 
           <div className= "header-top">
                <Logo className="logo" src={logo} alt="Guildhouse">     
                    
                    
                </Logo>
                <NavLink to="/" className="changelog-Btn">VIEW CHANGELOG</NavLink>
                {/* img src={logo} */}
                {/* logo could go here( svg file) */}
           </div>
           {/* header content */}
           <div className= "header-content">
                <Link className="compendium">COMPENDIUM</Link>
                <Link className="hero-Roster">HERO ROSTER</Link>
           </div>
        </HeaderComponent>
    );
  }
}
export default Header;

// Logo
const Logo= styled.img`
    width:20em;
    height:5rem;
    position:absolute;
    top:25%;
    left:50%;
    transform: translate(-50%,-50%);
`;

//Header Container
const HeaderComponent = styled.header`
    .changelog-Btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-wight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-yellow);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in; 
    &:hover {
        background: var(--main-yellow-hover);
      }

    }
    //Header top
    .header-top{
        position:relative;
        height:9rem;
        z-index:1;
    }
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
    //content buttons
    .compendium,.hero-Roster{
        display: inline-block;
        background: var(--main-yellow);
        border:none;
        outline:none;
        margin:0.33%;
        padding:1.5rem;
        border-radius:0.1875rem;
        font-size: 2rem;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0,0,0,0.56);
        transition: background 0.2s ease-in;
        cursor:pointer;
        &:hover{
            background:var(--main-yellow-hover);
        }
    }
    
`;
