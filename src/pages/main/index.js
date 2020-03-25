import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
class Main extends Component {
  render() {
    return (
        <div> 
            <Header/>
            <Footer/>
        </div>
    );
  }
}

export default Main;