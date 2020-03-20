import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './pages/main'
import { Switch, Route } from 'react-router-dom';
import Compendium from './pages/compendium/Compendium';
import Hero from './pages/hero/Hero';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path ="/compendium" component={Compendium}/>
        <Route path ="/hero" component={Hero}/>
      </Switch>
    </div>
    
  );
}

export default App;
