import React, { Component } from 'react';
import logo from '../../images/Logo.png'; 
import { NavLink, Link } from 'react-router-dom';
import styled from "styled-components";

class Compendium extends Component {
  render() {
    return (
    <HeaderComponent className="main-compendium-container"> 
      <div className="header-top">
        <Logo  className="logo" alt="Guildhouse"> 
        </Logo>
      </div>
      <Content>
        <Grid>
          <Row>
            <Col size={2}>
              <NavLink to="/howtoplay" className="how-to-play">HOW TO PLAY</NavLink>
            </Col>
            <Col size={2}>
              <NavLink to="/abilities" className="abilities">ABILITIES</NavLink>
            </Col>
          </Row>
          <Row>
            <Col size={2}>
              <NavLink to="/narrativetools" className="how-to-play">NARRATIVE TOOLS</NavLink>
            </Col>
            <Col size={2}>
              <NavLink to="/equipment" className="abilities">EQUIPMENT</NavLink>
            </Col>
          </Row>
        </Grid>
      </Content>
    </HeaderComponent>

    );
  }
}
export default Compendium; 

const Grid= styled.div``;
const Row= styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`;
const Col = styled.div`
  flex: ${(props) => props.size}
  align-items:center;
  justify-content: center;
`;
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


//Header Container
const HeaderComponent = styled.header`
    //Header top
    .header-top{
        position:relative;
        height:9rem;
        z-index:1;
    }

`;
//content
const Content = styled.header`

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
    .abilities,.how-to-play{
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