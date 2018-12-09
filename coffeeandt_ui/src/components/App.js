import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainImageGrid from './MainImageGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <MainImageGrid />
      </div>
    );
  }
}

export default App;
