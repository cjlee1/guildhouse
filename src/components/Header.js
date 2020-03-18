import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
// import logo from '../svg/logo.svg'; 
class Header extends Component {
  render() {
    return (
        <HeaderComponent className="header-container"> 
           <div className= "header-top">
                <h1> Guildhouse    
                    <NavLink to="/" className="changelog-Btn">View Changelog</NavLink>
                    
                </h1>

                {/* img src={logo} */}
                {/* logo could go here( svg file) */}
           </div>
        </HeaderComponent>
    );
  }
}
export default Header;

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
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in; 
    &:hover {
        background: var(--main-red-hover);
      }
    }
`;
