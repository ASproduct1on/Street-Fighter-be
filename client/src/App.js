import React from 'react';
import StartScreen from './components/startScreen'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';

function App() {

  return (
    <MuiThemeProvider>
      <StartScreen />
    </MuiThemeProvider>
  );
}

export default App;
