import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid/Grid';

const App: React.FC = () => {
  return (
    <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Grid name="David"/>
    </div>
  );
}

export default App;
