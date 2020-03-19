import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import image from '../images/house.jpg';
 class Footer extends Component {
  render() {
    return (
        <FooterContainer> 
            
            <div> 
                <div className="footer-Columns">
                    <ul>
                        <Link className="options-btn">options</Link>
                        <Link className="about-btn">about</Link>
                        <Link className="help-btn">help</Link>
                        <Link className="support-btn">support us</Link>

                    </ul>
                
                </div>
            </div>
        </FooterContainer>
    );
  }
}
export default Footer;
const FooterContainer = styled.footer`
    ul{
        background: #020101;
        background: radial-gradient(rgba(0,0,0,0), rgba(0,0.5,0,0.7)),
     no-repeat center center/cover;
        position:relative;
        right:0;
        margin-top:0;
        margin-bottom:0;
        display:flex;
        justify-content:right;
        align-content: center;
        flex-direction:row;
        z-index:1;
    }
    li{
        margin-right:10em;
    }
    //content buttons
    .options-btn,.help-btn,.about-btn,.support-btn{
        display: inline-block;
        font-family: 'Helvetica Bold', sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        border:none;
        outline:none;
        margin:0.33%;
        padding:0.25rem;
        border-radius:0.1875rem;
        font-size: 1rem;
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