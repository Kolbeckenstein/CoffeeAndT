import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import '@material-ui/core/Typography'
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Typography>CoffeeAndT!</Typography>
      </div>
    );
  }
}

export default App;
