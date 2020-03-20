
import React, { Component } from 'react';
import logo from '../../../images/Logo.png'; 
import styled from "styled-components";

class Abilities extends Component {
  render() {
    return (
     

    <div className="main-Hero-container"> 
        <div className="header-top">
            <img  alt="Guildhouse" className="Logo" />
            <h1>fffffffffff</h1>
        </div>

    </div>
    );
  }
}
export default Abilities; 
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
    font-family: 'Helvetica Bold', sans-serif;
    font-weight: 700; 
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
        font-family: 'Helvetica Bold', sans-serif;
        font-weight: 700;
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
            text-decoration: underline;
        }
    }
    
`;