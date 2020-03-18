import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './pages/main'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" component={Main}/>
    </Switch>
  );
}

export default App;
