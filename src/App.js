import React, { Component } from 'react';
import './App.css';
import Berries from './images/BoxOfChocolateBerries.jpg';

class App extends Component {
  render() {
    return (
      <div className="wrapper">


          <header className="header">HEADER</header>

          <div className="hero"></div>

          <div className="body">
              <div className="item item1"></div>
              <div className="item item2"></div>
              <div className="item item3"></div>
              <div className="item item4"></div>
              <div className="item item5"></div>
              <div className="item item6"></div>
              <div className="item item7"></div>
              <div className="item item8"></div>
          </div>

          <footer className="footer">FOOTER</footer>


      </div>
    );
  }
}

export default App;
