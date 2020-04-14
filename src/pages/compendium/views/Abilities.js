
import React, { Component } from 'react';
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import HeaderTop from '../components/HeaderTop';
import "../../../css/Tab.css";
import classesJson from '../../../data/classes.json';
import abilitiesJson from '../../../data/abilities.json'
import ClassView from './ClassView'

class Abilities extends Component {

  capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  };

  createTabLabels(object){
    const object_keys = Object.keys(object);
    let tabLabels = [];

    object_keys.forEach(key => {
      let children = object[key].map(elem => ({label: elem.class}));  
      tabLabels.push({"label": key, "children": children})
    });

    return tabLabels
  };
  
  createTabs(tabLabels){
    let tabs = [];
    
    tabLabels.forEach(elem => {
      tabs.push(<Tab tabFor={elem.label}>
        {this.capitalizeWord(elem.label)}
        </Tab>);

      if (elem.children){
        tabs.push(this.createTabs(elem.children))
      }
    });

    return tabs
  };

  createTabPanels(classes, abilities){
    const object_keys = Object.keys(classes);

    const tabPanels = object_keys.map(classRole => 
      classes[classRole].map(obj => (
        <TabPanel tabId={obj.class}>
          {obj.class}
          <ClassView
            classObj={obj}
            classAbilities={abilities[obj.class.toLowerCase()]}
            >
          </ClassView>
        </TabPanel>
        )
      )
    )

    return tabPanels
  };

  render() {
    const tabLabels = this.createTabLabels(classesJson);
    const tabs = this.createTabs(tabLabels);
    const tabPanels = this.createTabPanels(classesJson, abilitiesJson);

    return (
      <div>
        <HeaderComponent> 
          <div className="header-top">
            <HeaderTop/>
          </div>

        </HeaderComponent>
        <Content>
          <h1 className="narrative-header">Abilities</h1>    

          <Tabs vertical>
            <TabList>
              {tabs}
            </TabList>
            {tabPanels}

          </Tabs>

        </Content>
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