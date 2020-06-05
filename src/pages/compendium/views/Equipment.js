
import React, { Component } from 'react';
// import logo from '../../../images/Logo.png'; 
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "../../../css/Tab.css";
// import { LoremIpsum } from 'react-lorem-ipsum';
import HeaderTop from "../components/HeaderTop";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { NavLink } from 'react-router-dom';

class Equipment extends Component {
  render() {
    return (
      <div className="main-equipment-container">
          <HeaderComponent>
            <div className="header-top">
              <HeaderTop />
            </div>
          </HeaderComponent>
        <Content>
          <h1 className="narrative-header">Equipment</h1>

          <Tabs
            defaultTab="vertical-tab-one"
            vertical
            className="vertical-tabs"
          >
            <TabList>
              <Tab tabFor="vertical-tab-one">Armor</Tab>
              <Tab tabFor="vertical-tab-two">Loadouts</Tab>
              <Tab tabFor="vertical-tab-three">Shields</Tab>
            </TabList>

            <TabPanel tabId="vertical-tab-one">
              <Accordion allowZeroExpanded="true">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Sturdy Armor</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Speed 3, Health +34, Defense +12</p>
                    <p> Speed 3, Health +26, Defense +14 </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Balanced Armor</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Speed 4, Health +26, Defense +12</p>
                    <p>Speed 4, Health +26, Defense +10, Grit +2, Reflex +2</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>

            <TabPanel tabId="vertical-tab-two">
              <Accordion allowZeroExpanded="true">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Loadout</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Weapons and Spell Styles are all sorted in something
                      called ‘Loadouts.’ Loadouts represent a single set of
                      weapons that you hold during combat. All characters can
                      carry two loadouts. Whether it's a sword and shield, a
                      massive great axe, or powerful magic, loadouts are highly
                      customizable, and there is almost certainly one that fits
                      your playstyle or the character of your dreams.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Magic Loadout</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      There are two types of Loadouts, Weapon loadouts and Magic
                      Loadouts. Weapon Loadouts are made up of physical weapons
                      such as swords or bows and use Strength or Dexterity to
                      attack. The others are Magic Loadouts, which represent the
                      method and style by which you cast spells and magical
                      abilities can use either Vitality, Intellect, or Force to
                      use. Classes do not have a restriction on which type of
                      Loadout you want to take, though each class typically uses
                      abilities that require one or the other.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>

            <TabPanel tabId="vertical-tab-three">
              <Accordion allowZeroExpanded="true">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Physical shield</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Shield - Defense +4</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </Tabs>
        </Content>
      </div>
    );
  }
}
export default Equipment; 

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

//content
const Content = styled.body`
    .narrative-header{
        top:8%;
        left:50%;
        position:absolute;
        text-align:center;
        transform: translate(-50%,-5%);

    }
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