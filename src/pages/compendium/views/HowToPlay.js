
import React, { Component } from 'react';
import logo from '../../../images/Logo.png'; 
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "../../../css/Tab.css";
import { LoremIpsum } from 'react-lorem-ipsum';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
class HowToPlay extends Component {
  render() {
    return (
     

    <div className="main-how-to-play-container"> 
        <HeaderComponent className="header-top">
            <Logo  alt="Guildhouse" className="Logo" >
            </Logo>
        </HeaderComponent>
        <Content>
        
        <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
      <TabList>
        <Tab tabFor="vertical-tab-one">Narrative Rules</Tab>
        <Tab tabFor="vertical-tab-two">Tab 2</Tab>
        <Tab tabFor="vertical-tab-three">Tab 3</Tab>
      </TabList>

      <TabPanel tabId="vertical-tab-one">
      <Accordion allowZeroExpanded= "true" >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <LoremIpsum p={2} />  
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <LoremIpsum p={3} />  
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            
      </TabPanel>

      <TabPanel tabId="vertical-tab-two">
        <p>Tab content</p>
      </TabPanel>

      <TabPanel tabId="vertical-tab-three">
        <p>Tab 3 content</p>
      </TabPanel>
    </Tabs>
        </Content>
    </div>
    );
  }
}
export default HowToPlay; 
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
//content
const Content = styled.body`
    .vertical-tabs{
        top:15%;
        position: absolute;
        
    }
   
   

    button:hover{
        cursor:pointer;
        background: var(--main-yellow);
   
        
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