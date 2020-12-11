import React, { Component } from 'react';
import  Header from'./header.js';
import  Footer from'./footer.js';
import  Main from'./pages/main.js';
import './pages/main.css'; 
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Main />
         
      </div> 
    );
  }
}

export default App;
