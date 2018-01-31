import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">


          <header className="header">HEADER</header>

          <div className="hero"></div>

          <div className="body">
              <img className="item item1"/>
              <img className="item item2"/>
              <img className="item item3"/>
              <img className="item item4"/>
              <img className="item item5"/>
              <img className="item item6"/>
              <img className="item item7"/>
              <img className="item item8"/>
          </div>

          <footer className="footer">FOOTER</footer>


      </div>
    );
  }
}

export default App;
