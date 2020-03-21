import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './pages/main'
import { Switch, Route } from 'react-router-dom';
import Compendium from './pages/compendium/Compendium';
import Hero from './pages/hero/Hero';
import Abilities from './pages/compendium/views/Abilities';
import HowToPlay from './pages/compendium/views/HowToPlay';
import Equipment from './pages/compendium/views/Equipment';
import NarrativeTools from './pages/compendium/views/NarrativeTools';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path ="/compendium" component={Compendium}/>
        <Route path ="/hero" component={Hero}/>
        <Route path ="/abilities" component={Abilities}/>
        <Route path ="/howtoplay" component={HowToPlay}/>
        <Route path ="/equipment" component={Equipment}/>
        <Route path ="/narrativetools" component={NarrativeTools}/>

      </Switch>
    </div>
    
  );
}

export default App;
